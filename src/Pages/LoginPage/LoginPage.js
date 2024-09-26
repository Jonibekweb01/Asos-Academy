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
                  Welcome to <LogoStrong> Asos Academy </LogoStrong>
                </LoginTitle>
              </LoginInnerBox>
            </LoginTitleBox>
            <LoginRightInnerBox className="login__rightInner">
              <Form className="login__form" />
            </LoginRightInnerBox>
          </LoginRightBox>
          <LoginLeftBox className="login__left">
            <LoginImage
              className="login__image"
              src={Logo}
              //   width={100}
              height={595}
              alt="Logo of the site"
            />
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
          </LoginLeftBox>
        </LoginNextBox>
      </LoginBox>
    </>
  );
};

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
  max-width: 1300px;
  width: 100%;
  height: 595px;
  margin: auto auto;
  background-color: white;
  border-radius: 10px;
`;
const LoginLeftBox = styled.div`
  position: relative;
  max-width: 650px;
  width: 100%;
  /* background: #414141; */
  /* background: white; */
  border-radius: 10px 0px 0px 10px;
`;
const LoginRightBox = styled.div`
  max-width: 650px;
  width: 100%;
  /* border-radius: 0px 10px 10px 0px;
  border-right: 3px solid black;
  border-top: 3px solid black;
  border-bottom: 3px solid black; */
`;
const LoginImage = styled.img`
  display: block;
  max-width: 650px;
  width: 100%;
  height: 520px;
  /* padding: 415px 0 0 450px; */
`;
const LoginTitle = styled.h2`
  margin: 0;
  color: black;
  font-size: 48px;
  font-family: sans-serif;
`;

const LoginTitleBox = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 390px;
  width: 100%;
  margin-bottom: 100px !important;
`;

const LoginInnerBox = styled.div`
  padding: 30px 0 0 0;
`;

const RightBoxTitle = styled.h2`
  color: white;
  padding: 10px;
  border-radius: 5px;
  background-color: black;
  margin-bottom: 50px;
  font-size: 25px;
`;

const LoginRightInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
`;

const LogoStrong = styled.strong`
  color: #cea966;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SocialLogos = styled.img`
  /* border-radius: 100px; */
`;
