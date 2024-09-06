import React from "react";
import styled from "styled-components";
import Back from "../../assets/images/linear.png";
import BackImg from "../../assets/images/heroImgs.svg";
import "./Hero.css";
export const Hero = () => {
  return (
    <>
      <HeroBox className="hero">
        <div className="container">
          <HeroInner className="hero__inner">
            <HeroTitleBox className="hero__title__box">
              <HeroTitle className="hero__title">
                <HeroStrong className="hero__strong">Asos Academy</HeroStrong>{" "}
                <br />
                Dasturlashni Online biz <br />
                bilan o'rganing!
              </HeroTitle>
            </HeroTitleBox>
          </HeroInner>
        </div>
      </HeroBox>
    </>
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
  /* margin-right: 5px; */
`;

const HeroInner = styled.div`
  background-image: url(${BackImg});
  padding: 130px 0px 190px 0;
  background-size: 350px;
  background-position: right;
  background-repeat: no-repeat;
`;
const HeroTitleBox = styled.div`
  max-width: 892px;
  width: 100%;
`;
