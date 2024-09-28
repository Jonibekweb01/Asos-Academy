import React, { useState } from "react";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa"; // Importing icons
import "../Video/VIdeo.css";
import "./OfficialVideo.css";
import ProbVideo from "../../assets/videos/prob.mp4"; // Video 1
import back from "../../assets/images/linear.png";
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
      src: ProbVideo,
      title: "Marketing",
      description:
        "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
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
              active={activeIndex === index} // Pass active state
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
            <VideoEmbed controls poster={Oblojka2}>
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
  background-color: #f7f9fc; // Light background color for better contrast
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #fff;
  color: #ecf0f1;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative; // Added for positioning

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px; // Rounded corners
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) =>
    props.active ? "#e9d9bc4f" : "transparent"}; // Change background if active

  &:hover {
    background-color: #e9d9bc4f; // Slightly highlight on hover
  }

  svg {
    margin-right: 10px; // Space between icon and text
    font-size: 20px; // Icon size
    color: black; // Change icon color to black
  }

  span {
    color: black;
    font-size: 18px;
  }
`;

const VideoSection = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
`;

const VideoText = styled.p`
  font-size: 18px;
  color: black;
  margin: 0 0 20px 0;
  line-height: 1.5;
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
    height: 200px; // Adjust the height for mobile view
  }
`;

export default OfficialVideo;
