import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import { Footer } from "../../components/Footer/Footer";
import { AuthContext } from "../../context/AuthContext";

export const AdminPage = () => {
  const { token } = React.useContext(AuthContext);

  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);
  const navigate = useNavigate();

  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get values using refs
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
            Authorization: `Bearer ${token.token}`, // Include the token in the headers
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
        navigate("/"); // Redirect to the home page or appropriate route after success
      })
      .catch((error) => {
        setNotification({ message: "Something went wrong!", type: "error" });
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      });
  };

  return (
    <>
      <Header>
        <div className="container">
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
            <HeaderTitle>Admin Panel</HeaderTitle>
          </HeaderInner>
        </div>
      </Header>

      <Main>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Add New Student</FormTitle>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="first_name"
              ref={nameRef} // Attach ref here
              required
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="last_name"
              ref={lastNameRef} // Attach ref here
              required
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              ref={passwordRef} // Attach ref here
              required
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Label>Role</Label>
            <Select
              name="role"
              ref={roleRef} // Attach ref here
              required
              defaultValue="" // Set default value to prevent "Select" from being selected
            >
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
              placeholder="Mobile Phone"
            />
          </FormGroup>
          <SubmitButton type="submit">Add Student</SubmitButton>
        </FormContainer>
      </Main>

      {/* Notification */}
      {notification.message && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}

      <Footer />
    </>
  );
};

// Keyframes for the slide-in animation
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  background-color: ${({ type }) =>
    type === "success" ? "#4CAF50" : "#f44336"};
  color: white;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: ${({ type }) => (type ? slideIn : slideOut)} 0.5s ease-out;
  transition: transform 0.5s ease-out;

  @media (max-width: 481px) {
    width: 90%;
    right: 5%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 481px) {
    padding: 120px 10px;
    flex-direction: column;
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
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 481px) {
    font-size: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;

  @media (max-width: 481px) {
    font-size: 12px;
  }
`;

const Input = styled.input`
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

const Select = styled.select`
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
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #d0b072;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #b89765;
  }

  @media (max-width: 481px) {
    font-size: 14px;
    padding: 8px;
  }
`;
