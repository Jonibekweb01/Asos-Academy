import React, { useState } from "react";
import styled from "styled-components";
import "../Video/VIdeo.css";
import "./OfficialVideo.css";
import ProbVideo from "../../assets/videos/prob.mp4";
import ProbVideo2 from "../../assets/videos/2024-09-16 20-23-25.mkv";
import Oblojka2 from "../../assets/images/oblojka2.jpg";
import { TbStackFront } from "react-icons/tb";

export const OfficialVideo = React.forwardRef((props, ref) => {
  const [currentVideo, setCurrentVideo] = useState({
    src: ProbVideo,
    title: "1 dars",
    description: "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
  });

  const [activeIndex, setActiveIndex] = useState(0); // State for active index

  const videos = [
    {
      src: ProbVideo,
      title: "Front-end",
      description:
        "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
    },
    {
      src: ProbVideo2,
      title: "Marketing",
      description: "Kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
    },
    {
      src: ProbVideo,
      title: "Mobilografiya",
      description:
        "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
    },
    {
      src: ProbVideo,
      title: "Design",
      description:
        "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
    },
  ];

  const changeVideo = (videoData, index) => {
    setCurrentVideo(videoData);
    setActiveIndex(index); // Update active index
  };

  return (
    <div className="container-2">
      <VideoPageWrapper ref={ref}>
        <Sidebar>
          {videos.map((video, index) => (
            <NavItem
              key={index}
              active={activeIndex === index}
              onClick={() => changeVideo(video, index)}
            >
              <TbStackFront />
              <span>{video.title}</span>
            </NavItem>
          ))}
        </Sidebar>
        <VideoSection>
          <VideoInner>
            <VideoTitle>{currentVideo.title}</VideoTitle>
            <VideoText>{currentVideo.description}</VideoText>
            <VideoEmbed
              controls={true}
              poster={Oblojka2}
              onError={(e) => {
                console.error("Error loading video", e);
                e.target.src = ProbVideo; // Fallback to another video or display an error message
              }}
            >
              <source src={currentVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoEmbed>
          </VideoInner>
        </VideoSection>
      </VideoPageWrapper>
    </div>
  );
});

const VideoPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f7f9fc;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const VideoSection = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (max-width: 458px) {
    background-color: #f7f9fc;
    margin-top: 80px;
    width: 100%;
    height: 560px;
  }
`;

const VideoInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
`;

const VideoTitle = styled.h2`
  font-size: 28px;
  color: black;
  margin: 0 0 10px 0;

  @media (max-width: 458px) {
    font-size: 24px;
  }
`;

const VideoText = styled.p`
  font-size: 18px;
  color: black;
  margin: 0 0 20px 0;
  line-height: 1.5;

  @media (max-width: 458px) {
    font-size: 16px; // Reduce font size on smaller screens
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #d0b072;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  left: -14px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    top: 80px;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.2)" : "transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    margin-right: 10px;
    font-size: 20px;
    color: white;
  }

  span {
    color: white;
    font-size: 18px;
  }
`;

const VideoEmbed = styled.video`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  display: block;
  height: auto;
  border: 1px solid #ddd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export default OfficialVideo;
