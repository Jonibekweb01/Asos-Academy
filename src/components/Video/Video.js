import React from "react";
import styled from "styled-components";
import "./VIdeo.css";
import ProbVideo from "../../assets/videos/prob.mp4";
import Oblojka from "../../assets/images/oblojka.jpg";

export const Video = () => {
  return (
    <VideoSection className="video-section">
      <div className="container">
        <VideoInner className="video-inner">
          <VideoTitle className="video-title">Bepul kurslarimiz</VideoTitle>
          <VideoText className="video-text">
            Ushbu kurslarinzni hozirda mutlaqo bepul o'rganishingiz mumkin.
          </VideoText>
          <VideoEmbed
            className="video-embed"
            controls={true}
            poster={Oblojka} 
          >
            <source src={ProbVideo} type="video/mp4" />
          </VideoEmbed>
        </VideoInner>
      </div>
    </VideoSection>
  );
};

// Styled Components
const VideoSection = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const VideoInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const VideoTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`;

const VideoText = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
  line-height: 1.5;
  margin-bottom: 50px;
`;

const VideoEmbed = styled.video`
  width: 100%;
  max-width: 710px;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
  height: 356px;
  border: 1px solid #ddd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
