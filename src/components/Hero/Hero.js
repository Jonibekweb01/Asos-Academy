import React from "react";
import styled from "styled-components";
import Back from "../../assets/images/linear.png";
import BackImg from "../../assets/images/pic.png";
import Telegram from "../../assets/images/telegram-brands-solid.svg";
import Instagram from "../../assets/images/square-instagram-brands-solid.svg";
import FaceBook from "../../assets/images/facebook-brands-solid.svg";

export const Hero = () => {
  return (
    <HeroBox>
      <div className="container">
        <HeroInner>
          <HeroTitleBox>
            <HeroTitle>
              <HeroStrong>Asos Academy</HeroStrong> <br />
              Dasturlashni <HeroStrong>Online</HeroStrong> biz <br />
              bilan o'rganing!
            </HeroTitle>
            <FreeBtn type="button">Bepul boshlash</FreeBtn>
          </HeroTitleBox>
          <SocialMedia>
            <a href="https://telegram.com">
              <SocialLogos
                src={Telegram}
                width={30}
                height={30}
                alt="Telegram Logo"
              />
            </a>
            <a href="https://instagram.com">
              <SocialLogos
                src={Instagram}
                width={30}
                height={30}
                alt="Instagram Logo"
              />
            </a>
            <a href="https://facebook.com">
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

// Styled Components
const FreeBtn = styled.button`
  padding: 15px 20px;
  font-size: 16px;
  color: white;
  border: none;
  font-weight: bold;
  margin-top: 20px;
  background-color: #d0b072;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 15px;
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
    font-size: 35px;
  }
`;

const HeroStrong = styled.strong`
  color: #d0b072;
`;

const HeroInner = styled.div`
  text-align: center;
  background-image: url(${BackImg});
  padding: 108px 0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-position: bottom;
    padding:  100px 0 550px 0;
    background-size: contain;
  }
`;

const HeroTitleBox = styled.div`
  max-width: 892px;
  width: 100%;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    margin-bottom: 30px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    display: none !important;
  }
`;

const SocialLogos = styled.img`
  display: block;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
