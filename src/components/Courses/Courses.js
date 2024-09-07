import React from "react";
import styled from "styled-components";
import "./Course.css";
import Online2 from "../../assets/images/online2.png";

export const Courses = ({ id }) => {
  return (
    <Course id={id} className="course">
      <div className="container">
        <CourseInner className="course__inner">
          <div className="course__box">
            <CourseTitle className="course__title">Online</CourseTitle>
            <CourseText className="course__text">
              Ushbu ta'lim shakli sizga ko'plab imkoniyat va qulayliklarni
              taqdim etadi. Lokatsiyaning o'zingizga qulay bo'lishi, kuning
              istalgan qismida masofaviy ta'lim olish imkoniyati, ortiqcha
              moddiy chiqimlarsiz masofaviy tarzda bilim olish bu-albatta, hamma
              uchun birdek manzur bo'ladi.
            </CourseText>
          </div>
        </CourseInner>
      </div>
    </Course>
  );
};

const Course = styled.section`
  z-index: 124 !important;
  padding: 50px 0 0 0;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const CourseInner = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  /* background-color: #f8f8f8; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #f8f8f8;
  background-image: url(${Online2});
  background-size: 420px 400px;
  background-position: top right;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media (max-width: 480px) {
    padding: 440px 40px 40px 40px;
  }
`;

const CourseTitle = styled.h2`
  margin-bottom: 20px !important;
  font-size: 36px;
  color: #333;
  margin: 0;
`;

const CourseText = styled.p`
  font-size: 20px;
  color: #666;
  margin: 0;
  line-height: 35px;
`;
