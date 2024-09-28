import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import { AuthContext } from "../../context/AuthContext";
import ImgLogin from "../../assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import { IoPersonAdd, IoPersonAddOutline } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
import "../../index.css";

export const AdminPage = () => {
  const { token, setToken } = React.useContext(AuthContext);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("addStudent");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setToken(null); // Update token in context (optional, depends on your logic)
    navigate("/login"); // Redirect to login page
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const selectedRole = roleRef.current.value;

    axios
      .post(
        "http://45.130.148.72:4000/users",
        {
          first_name: name,
          last_name: lastName,
          mobil_phone: phone,
          role: selectedRole,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then((data) => {
        setNotification({
          message: "Student or Admin added successfully!",
          type: "success",
        });
        nameRef.current.value = "";
        lastNameRef.current.value = "";
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        roleRef.current.value = "";
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      })
      .catch((error) => {
        setNotification({ message: "Something went wrong!", type: "error" });
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      });
  };

  const Students = () => {
    const { token } = React.useContext(AuthContext);
    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
      axios
        .get("http://45.130.148.72:4000/users?page[limit]=1000", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
          params: {
            limit: 40,
          },
        })
        .then((response) => {
          console.log(response.data);
          setStudents(response.data);
          setLoading(false); // Set loading to false
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch students."); // Set error message
          setLoading(false); // Set loading to false
        });
    }, [token.token]);

    useEffect(() => {
      console.log(students.data);
    }, [students]);

    useEffect(() => {
      // Simulate a data fetch
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Simulate a 3-second loading time
    }, []);

    // Spinner animation variants
    const spinnerVariants = {
      animate: {
        rotate: [0, 360], // Spin from 0 to 360 degrees
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        },
      },
    };

    // CSS for spinner container
    const spinnerContainerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      height: "100vh", // Full screen height for centering
    };

    // Render loading state or error if applicable
    if (loading)
      return (
        <div style={spinnerContainerStyle}>
          {/* Spinner animation */}
          <motion.div
            variants={spinnerVariants}
            animate="animate"
            style={{
              border: "10px solid #f3f3f3", // Light grey border
              borderRadius: "50%",
              borderTop: "10px solid #E5C98D", // Blue border for top
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      );

    if (error) return <p>{error}</p>;

    return (
      <CategoryContent>
        <h2 style={{ color: "#D0B072" }}>Students List</h2>
        {students.data.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile Phone</th>
              </tr>
            </thead>
            <tbody>
              {students.data
                .filter((student) => student.role === "student") // Фильтрация по роли
                .map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td> {/* Использование индекса для ID */}
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.mobil_phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        ) : (
          <p>No students found.</p>
        )}
      </CategoryContent>
    );
  };

  const spinnerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full-screen height for centering the spinner
  };

  const spinnerStyle = {
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    height: "120px",
    animation: "spin 2s linear infinite",
  };

  const spinnerKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  // Styled component for the table
  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      /* cursor: pointer; */
      padding: 20px;
      background-color: #e5c98d;
      font-weight: bold;
      color: white;
    }

    tr {
      cursor: pointer !important;
    }

    tr:nth-child(even) {
      cursor: pointer !important;
      background-color: white;
    }
  `;

  const Admins = () => {
    const { token } = React.useContext(AuthContext);
    const [admins, setAdmins] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
      axios
        .get("http://45.130.148.72:4000/users?page[limit]=1000", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
          params: {
            limit: 40,
          },
        })
        .then((response) => {
          console.log(response.data);
          setAdmins(response.data);
          setLoading(false); // Установить загрузку в false
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch admins."); // Установить сообщение об ошибке
          setLoading(false); // Установить загрузку в false
        });
    }, [token.token]);

    useEffect(() => {
      console.log(admins.data);
    }, [admins]);

    useEffect(() => {
      // Симуляция загрузки данных
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Симуляция времени загрузки в 3 секунды
    }, []);

    // CSS для контейнера спиннера
    const spinnerContainerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      height: "100vh", // Полная высота экрана для центрирования
    };

    // Отрисовка состояния загрузки или ошибки, если это применимо
    if (loading)
      return (
        <div style={spinnerContainerStyle}>
          {/* Анимация спиннера */}
          <motion.div
            variants={{
              animate: {
                rotate: [0, 360], // Вращение от 0 до 360 градусов
                transition: {
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                },
              },
            }}
            animate="animate"
            style={{
              border: "10px solid #f3f3f3", // Светло-серый бордюр
              borderRadius: "50%",
              borderTop: "10px solid #E5C98D", // Голубой бордюр для верхней части
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      );

    if (error) return <p>{error}</p>;

    return (
      <CategoryContent>
        <h2 style={{ color: "#D0B072" }}>Admins List</h2>
        {admins.data.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile Phone</th>
              </tr>
            </thead>
            <tbody>
              {admins.data
                .filter((admin) => admin.role === "admin") // Фильтрация по роли
                .map((admin, index) => (
                  <tr key={admin.id}>
                    <td>{index + 1}</td> {/* Использование индекса для ID */}
                    <td>{admin.first_name}</td>
                    <td>{admin.last_name}</td>
                    <td>{admin.mobil_phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        ) : (
          <p>No admins found.</p>
        )}
      </CategoryContent>
    );
  };

  const Mentors = () => (
    <CategoryContent>
      <h2>Mentors List</h2>
      <p>This section displays the list of mentors.</p>
    </CategoryContent>
  );

  const AddStudent = () => (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add New Student</FormTitle>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          name="first_name"
          ref={nameRef}
          required
          placeholder="First Name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          name="last_name"
          ref={lastNameRef}
          required
          placeholder="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          ref={passwordRef}
          required
          placeholder="Password"
        />
      </FormGroup>
      <FormGroup>
        <Label>Role</Label>
        <Select name="role" ref={roleRef} required defaultValue="">
          <option disabled value="">
            Select
          </option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Mobile Phone</Label>
        <Input
          type="text"
          name="mobile_phone"
          ref={phoneRef}
          required
          placeholder="+998"
          defaultValue={"+998"}
        />
      </FormGroup>
      <SubmitButton type="submit">
        Add student <IoPersonAdd style={{ fontSize: "22px" }} />
        {/* <IoPersonAddOutline style={{ fontSize: "20px", fontFamily: "bold" }} /> */}
      </SubmitButton>
    </FormContainer>
  );

  return (
    <>
      <Header>
        <div className="containers">
          <HeaderInner>
            <HeaderLogoBox>
              <NavLink to="/" className="header__linkImg">
                <HeaderImg
                  src={Logo}
                  alt="Company Logo"
                  width={100}
                  height={65}
                />
              </NavLink>
            </HeaderLogoBox>
            {token ? (
              <LogButton onClick={handleLogout}>
                {" "}
                {/* Handle logout on click */}
                Log Out
                <LoginImg
                  src={ImgLogin}
                  alt="Login Icon"
                  width={25}
                  height={25}
                />
              </LogButton>
            ) : (
              <LogButton>
                <NavLink to="/login" className="header__loginLink">
                  Login
                </NavLink>
                <LoginImg
                  src={ImgLogin}
                  alt="Login Icon"
                  width={25}
                  height={25}
                />
              </LogButton>
            )}
          </HeaderInner>
        </div>
      </Header>

      <PageLayout>
        <Sidebar>
          <SidebarItem
            active={activeCategory === "students"}
            onClick={() => setActiveCategory("students")}
          >
            <PiStudentFill style={{ fontSize: "25px" }} />
            Students
          </SidebarItem>
          <SidebarItem
            active={activeCategory === "admins"}
            onClick={() => setActiveCategory("admins")}
          >
            <MdAdminPanelSettings style={{ fontSize: "25px" }} />
            Admins
          </SidebarItem>
          <SidebarItem
            active={activeCategory === "mentors"}
            onClick={() => setActiveCategory("mentors")}
          >
            <FaChalkboardTeacher style={{ fontSize: "25px" }} />
            Mentors
          </SidebarItem>
          <SidebarItem
            active={activeCategory === "addStudent"}
            onClick={() => setActiveCategory("addStudent")}
          >
            <IoPersonAdd style={{ fontSize: "23px" }} />
            Add
          </SidebarItem>
        </Sidebar>

        <Main>
          {activeCategory === "students" && <Students />}
          {activeCategory === "admins" && <Admins />}
          {activeCategory === "mentors" && <Mentors />}
          {activeCategory === "addStudent" && <AddStudent />}
        </Main>

        {notification.message && (
          <Alert severity="success" type={notification.type}>
            {notification.message}
          </Alert>
        )}
      </PageLayout>
    </>
  );
};

const LogButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: #d0b072;
  border: none;
  padding: 0;
  cursor: pointer;
  border: 2px solid #d0b072;
  border-radius: 10px;
  padding: 10px 15px;
  transition: 0.4s ease;
  overflow: hidden;
  color: white;

  & > a {
    color: white;
    text-decoration: none;
  }
`;

const LoginImg = styled.img``;

// Styles
const PageLayout = styled.div`
  display: flex;
  padding: 0 0 0 260px;

  @media (max-width: 458px) {
    padding: 0px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  height: 100vh;
  left: 0;
  width: 220px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  @media (max-width: 458px) {
    top: 70px;
    height: 40px;
    padding: 20px 0 0 0;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px 10px;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.3s;
  background-color: ${({ active }) => (active ? "#d0b072" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#333")};

  &:hover {
    background-color: #d0b072;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fffffff2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 12;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;

  @media (max-width: 481px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 481px) {
    justify-content: center;
  }
`;

const HeaderImg = styled.img``;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 481px) {
    font-size: 18px;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media (max-width: 481px) {
    padding: 120px 10px;
    flex-direction: column;
  }

  @media (max-width: 458px) {
    padding: 240px 35px;
    flex-direction: column;
    align-items: stretch; /* Stretch items to fill available space */
  }
`;

const FormContainer = styled.form`
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 481px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 458px) {
    padding: 10px; /* Reduced padding for smaller screens */
    max-width: 95%; /* Take full width */
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #d0b072;

  @media (max-width: 481px) {
    font-size: 27px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #d0b072;

  @media (max-width: 481px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  max-width: 378px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #d0b072;
  }

  @media (max-width: 481px) {
    width: 305px;
    font-size: 14px;
    padding: 15px;

    &::placeholder {
      font-size: 18px;
    }
  }


`;

const Select = styled.select`
  max-width: 404px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #d0b072;
  }

  @media (max-width: 481px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: white;
  background-color: #d0b072;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #c19b58;
  }

  @media (max-width: 481px) {
    font-size: 18px;
  }

  @media (max-width: 458px) {
    font-size: 18px; /* Slightly smaller font for smaller screens */
    padding: 10px; /* Reduced padding for smaller screens */
  }
`;

const CategoryContent = styled.div`
  max-width: 97%;
  width: 100%;

  h2 {
    margin-bottom: 10px;
    font-size: 24px; /* Base font size for h2 */
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 458px) {
    h2 {
      font-size: 20px; /* Adjust font size for smaller screens */
    }

    p {
      font-size: 14px; /* Adjust paragraph font size */
    }
  }
`;
