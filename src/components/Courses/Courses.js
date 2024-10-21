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
            <CourseTitle className="course__title">Nima uchun Asos Akademiyasi?</CourseTitle>
            <CourseText className="course__text">
              Uzoq yillardan beri Matematika va turli fanlar bo’yicha o’zbekistonlik uzoq yillik xalqaro olimpiada g’oliblari va ustozlaridan haqiqiy ilmlarni olish endi biz bilan juda qulay, o’zingizga kerakli fanni tanlang va biz bilan bog’laning
            </CourseText>
          </div>
        </CourseInner>
      </div>
    </Course>
  );
};

const Course = styled.section`
  z-index: 124 !important;
  padding: 50px 0 50px 0;
   
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


