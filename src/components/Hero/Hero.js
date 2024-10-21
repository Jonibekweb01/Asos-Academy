import React from "react";
import styled from "styled-components";
import Back from "../../assets/images/linear.png";
import BackImg from "../../assets/images/pic.png";
import Telegram from "../../assets/images/telegram-brands-solid.svg";
import Instagram from "../../assets/images/square-instagram-brands-solid.svg";
import FaceBook from "../../assets/images/facebook-brands-solid.svg";

import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <HeroBox>
      <div className="container">
        <HeroInner>
          <HeroTitleBox>
            <HeroTitle>
              <HeroStrong>Asos Academy</HeroStrong> <br />
              Ilm - cheksizlik sari yo'l
            </HeroTitle>
            <LogButton>
              <NavLink  to="/login" className="header__loginLink">
                Bepul Boshlash
              </NavLink>
            </LogButton>
          </HeroTitleBox>
          <SocialMedia>
            <a href="https://t.me/AsosAkademiya">
              <SocialLogos
                src={Telegram}
                width={30}
                height={30}
                alt="Telegram Logo"
              />
            </a>
            <a href="https://www.instagram.com/asosakademiya">
              <SocialLogos
                src={Instagram}
                width={30}
                height={30}
                alt="Instagram Logo"
              />
            </a>
            <a href="https://www.facebook.com/asosakademiya">
              <SocialLogos
                src={FaceBook}
                width={30}
                height={30}
                alt="Facebook Logo"
              />
            </a>
          </SocialMedia>
        </HeroInner>
      </div>
      <div className="hero_b"></div>
      <div className="hero_a"></div>
    </HeroBox>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;

  @media (max-width: 480px) {
    margin: 0 auto;
  }
  & > a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-color: #b59c5a;
  }
`;


const HeroBox = styled.section`
  background-image: url(${Back});
  background-size: cover; /* Changed from 'contain' for full cover */
  background-repeat: no-repeat;
  width: 100%;
  height: 630px;
  background-position: center;

  @media (max-width: 768px) {
    padding: 650px;
    width: 120vw;
    padding: 0 0 640px 0;
    height: 500px;
    background-image: none !important; /* Adjust background position for smaller screens */
  }

  @media (max-width: 480px) {
    height: 400px;
    background-position: top;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: black;
  font-size: 65px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const HeroStrong = styled.strong`
  color: #d0b072;
`;

const HeroInner = styled.div`
  background-image: url(${BackImg});
  padding: 108px 0;
  background-size: 440px;
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-size: cover;
  }

  @media (max-width: 480px) {
    text-align: center;
    background-position: bottom;
    padding: 100px 0 550px 0;
    background-size: contain;
  }
`;

const HeroTitleBox = styled.div`
  max-width: 892px;
  width: 100%;
  margin-bottom: 70px;

  @media (max-width: 480px) {
    max-width: 95%;
    margin-bottom: 30px;
    margin: 0 auto;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
    display: none !important;
  }
`;

const SocialLogos = styled.img`
  display: block;
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: scale(1.1); /* Slight zoom on hover */
    opacity: 0.85; /* Slightly reduce opacity for a sleek look */
  }
`;
