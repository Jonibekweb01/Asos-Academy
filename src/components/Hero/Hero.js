import React from "react";
import styled from "styled-components";
import Back from "../../assets/images/linear.png";
import BackImg from "../../assets/images/heroImgs.svg";
import Telegram from "../../assets/images/telegram-brands-solid.svg";
import Instagram from "../../assets/images/square-instagram-brands-solid.svg";
import FaceBook from "../../assets/images/facebook-brands-solid.svg";
import "./Hero.css";

export const Hero = () => {
  return (
    <HeroBox className="hero">
      <div className="container">
        <HeroInner className="hero__inner">
          <HeroTitleBox className="hero__title__box">
            <HeroTitle className="hero__title">
              <HeroStrong className="hero__strong">Asos Academy</HeroStrong>{" "}
              <br />
              Dasturlashni{" "}
              <HeroStrong className="hero__strong">
                {" "}
                Online{" "}
              </HeroStrong> biz <br />
              bilan o'rganing!
            </HeroTitle>
          </HeroTitleBox>
          <SocialMedia className="hero__socialMedia">
            <a href="https://telegram.com" className="hero__link">
              <SocialLogos
                src={Telegram}
                width={30}
                height={30}
                alt="Telegram Logo"
                className="login__hero__image"
              />
            </a>
            <a href="https://instagram.com" className="hero__link">
              <SocialLogos
                src={Instagram}
                width={30}
                height={30}
                alt="Instagram Logo"
                className="login__hero__image"
              />
            </a>
            <a href="https://facebook.com" className="hero__link">
              <SocialLogos
                src={FaceBook}
                width={30}
                height={30}
                alt="Facebook Logo"
                className="login__hero__image"
              />
            </a>
          </SocialMedia>
        </HeroInner>
      </div>
    </HeroBox>
  );
};

const HeroBox = styled.div`
  background-image: url(${Back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 630px;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: black;
  font-size: 65px;
`;

const HeroStrong = styled.strong`
  color: #d0b072;
`;

const HeroInner = styled.div`
  background-image: url(${BackImg});
  padding: 130px 0 130px 0;
  background-size: 400px;
  background-position: right;
  background-repeat: no-repeat;
`;

const HeroTitleBox = styled.div`
  max-width: 892px;
  width: 100%;
  margin-bottom: 70px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLogos = styled.img`
  display: block;
`;
