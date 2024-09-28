import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/oq-fon-uchun.png";
import Instagram from "../../assets/images/square-instagram-brands-solid.svg";
import Telegram from "../../assets/images/telegram-brands-solid.svg";
import FaceBook from "../../assets/images/facebook-brands-solid.svg";
import "./LoginPage.css";

import { Form } from "../../components/Form/Form";
export const LoginPage = () => {
  return (
    <>
      <LoginBox className="login">
        <LoginNextBox className="login__box">
          <LoginRightBox className="login__right">
            <LoginTitleBox className="login__titleBox">
              <LoginInnerBox className="login__innerBox">
                <LoginTitle className="login__title">
                  Welcome to <LogoStrong>Asos Academy</LogoStrong>
                </LoginTitle>
              </LoginInnerBox>
            </LoginTitleBox>
            <LoginRightInnerBox className="login__rightInner">
              <Form className="login__form" />
            </LoginRightInnerBox>
            <SocialMedia className="login__socialMedia">
              <a href="https://telegram.com" className="login__link">
                <SocialLogos
                  src={Telegram}
                  width={30}
                  height={30}
                  alt="Logo of the site"
                  className="login__link__image"
                />
              </a>
              <a href="https://instagram.com" className="login__link">
                <SocialLogos
                  src={Instagram}
                  width={30}
                  height={30}
                  alt="Logo of the site"
                  className="login__link__image"
                />
              </a>
              <a href="https://facebook.com" className="login__link">
                <SocialLogos
                  src={FaceBook}
                  width={30}
                  height={30}
                  alt="Logo of the site"
                  className="login__link__image"
                />
              </a>
            </SocialMedia>
          </LoginRightBox>
          <LoginLeftBox className="login__left">
            <LoginImage
              className="login__image"
              src={Logo}
              height={595}
              alt="Logo of the site"
            />
          </LoginLeftBox>
        </LoginNextBox>
      </LoginBox>
    </>
  );
};

// Styled Components with Media Queries for Responsiveness

const LoginBox = styled.div`
  height: 100%;
  max-width: 100%;
  width: 100%;
  padding: 0 0 50px 0;
  background-color: #fff;
`;

const LoginNextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  height: 595px;
  margin: auto auto;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 458px) {
    padding: 10px;
  }
`;

const LoginLeftBox = styled.div`
  position: relative;
  max-width: 650px;
  width: 100%;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 768px) {
    display: none; /* Hide the image box on smaller screens */
  }
`;

const LoginRightBox = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 20px;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
    border-radius: 10px;
  }
`;

const LoginImage = styled.img`
  display: block;
  max-width: 650px;
  width: 100%;
  height: 520px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginTitle = styled.h2`
  margin: 0;
  color: black;
  font-size: 48px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 458px) {
    font-size: 48px;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const LoginTitleBox = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 390px;
  width: 100%;
`;

const LoginInnerBox = styled.div`
  padding: 30px 0 0 0;

  @media (max-width: 458px) {
    padding: 20px 0 0 0;
  }
`;

const LoginRightInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    height: auto;
  }

  @media (max-width: 458px) {
    margin-top: 10px;
  }
`;

const LogoStrong = styled.strong`
  color: #cea966;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 458px) {
    margin-top: 10px;
    gap: 5px;
  }
`;

const SocialLogos = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 458px) {
    width: 45px;
    height: 35px;
  }
`;
