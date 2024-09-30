import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import styled from "styled-components";

export const Form = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const { setToken } = useContext(AuthContext);
  const { setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка на существование элементов перед извлечением значений
    const name = nameRef?.current?.value;
    const lastName = lastNameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const password = passwordRef?.current?.value;
    const selectedRole = roleRef?.current?.value;

    if (!phone || !password) {
      console.error("Phone and password are required!");
      return;
    }

    axios
      .post("https://api.asosakademiya.uz/auth/login", {
        mobil_phone: phone,
        password: password,
        // first_name: name,
        // last_name: lastName,
        // role: selectedRole,
      })
      .then((data) => {
        setToken(data.data);
        setRole(data.data.role);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  return (
    <Formik onSubmit={handleSubmit}>
      {/* Проверьте наличие всех нужных элементов  */}

      <FormikPhone
        placeholder="Phone Number"
        aria-label="Phone Number"
        type="tel"
        name="mobil_phone"
        ref={phoneRef}
      />
      <FormikInput
        placeholder="Password"
        name="password"
        aria-label="Password"
        type="password"
        ref={passwordRef}
      />
      <FormButton type="submit">Login</FormButton>
    </Formik>
  );
};

// Styled components (unchanged)

const Formik = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const FormikInput = styled.input`
  width: 300px;
  padding: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid black;
  transition: all 0.3s ease;
  font-size: 18px;

  &:hover {
    transform: scale(1.02); /* Slight zoom on hover */
    border-bottom: 3px solid #555; /* Slight change in border color */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }

  @media (max-width: 458px) {
    &::placeholder {
      font-size: 20px !important;
      transition: all 1.2s ease;
    }
    padding: 20px !important;
  }
`;

const FormikPhone = styled(FormikInput)``;

const FormikLast = styled(FormikInput)``;

const FormikSelect = styled.select`
  width: 320px;
  padding: 12px 5px;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid black;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  color: gray;

  &:focus {
    border-bottom: 3px solid #3c3c3c;
  }

  option {
    background-color: white;
    color: black;
  }
`;

const FormLink = styled.a`
  margin-top: 5px;
  margin-bottom: 0px;
  color: black;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    color: #3c3c3c;
  }
`;

const FormButton = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #3c3c3c;
    transform: translateY(-2px); /* Slight lift on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Soft shadow effect */
  }

  @media (max-width: 458px) {
    padding: 15px 40px;
    margin-top: 10px;
    font-size: 25px;
  }
`;
