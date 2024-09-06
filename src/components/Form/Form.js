import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import styled from "styled-components";

export const Form = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("https://reqres.in/api/login", { email: name, password: password })
      .then((data) => {
        setToken(data.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <FormikInput
        placeholder="Name"
        aria-label="Name"
        type="email"
        ref={nameRef}
      />
      <FormikInput
        placeholder="Password"
        aria-label="Password"
        type="password"
        ref={passwordRef}
      />
      <FormLink href="/">Forgot password?</FormLink>
      <FormButton type="submit">Login</FormButton>
    </Formik>
  );
};

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
  transition: all 0.2s ease;
  font-size: 16px;

  &::placeholder {
    font-size: 14px;
    transition: all 1.2s ease;
  }

  &:focus::placeholder {
    transition: all 1.2s ease;

    font-size: 16px;
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
  /* background-color: #CEA966; */
  background-color: black;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #3c3c3c;
  }
`;
