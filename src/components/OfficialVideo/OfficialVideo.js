import React, { useState } from "react";
import styled from "styled-components";
import { FaVideo, FaUsers, FaChartLine, FaCog } from "react-icons/fa"; // Importing icons
import "../Video/VIdeo.css";
import "./OfficialVideo.css";
import ProbVideo from "../../assets/videos/prob.mp4"; // Video 1
import back from "../../assets/images/linear.png";
import Oblojka2 from "../../assets/images/oblojka2.jpg";

export const OfficialVideo = React.forwardRef((props, ref) => {
  // Use forwardRef to accept ref
  const [currentVideo, setCurrentVideo] = useState({
    src: ProbVideo,
    title: "1 dars",
    description: "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
  });

  const changeVideo = (videoData) => {
    setCurrentVideo(videoData);
  };

  return (
    <div className="container-2">
      <VideoPageWrapper ref={ref}>
        <Sidebar>
          <NavItem
            onClick={() =>
              changeVideo({
                src: ProbVideo,
                title: "1 dars",
                description:
                  "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
              })
            }
          >
            <FaVideo />
            <span>Front-end</span>
          </NavItem>
          <NavItem
            onClick={() =>
              changeVideo({
                src: ProbVideo,
                title: "1 dars",
                description:
                  "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
              })
            }
          >
            <FaVideo />
            <span>Marketing</span>
          </NavItem>
          <NavItem
            onClick={() =>
              changeVideo({
                src: ProbVideo,
                title: "1 dars",
                description:
                  "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
              })
            }
          >
            <FaVideo />
            <span>Mobilografiya</span>
          </NavItem>
          <NavItem
            onClick={() =>
              changeVideo({
                src: ProbVideo,
                title: "1 dars",
                description:
                  "Ushbu kurslarni hozirda mutlaqo bepul o'rganishingiz mumkin.",
              })
            }
          >
            <FaVideo />
            <span>Design</span>
          </NavItem>
          {/* Other NavItems... */}
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

// const SidebarHeader = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
//   text-align: center;
//   color: #ecdbba; // Light color for header
// `;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px; // Rounded corners
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9d9bc4f;
  }

  svg {
    margin-right: 10px; // Space between icon and text
    font-size: 20px; // Icon size
    color: #d0b072; // Change icon color to black
  }

  span {
    color: #d0b072;
    font-size: 18px;
    // Text size: ;
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
  background-color: #fff; // White background for video section
`;

const VideoTitle = styled.h2`
  font-size: 28px;
  color: #d0b072;
  margin: 0 0 10px 0;
`;

const VideoText = styled.p`
  font-size: 18px;
  color: #d0bc8f;
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

const VideoEmbed = styled.video`
  width: 100%;
  max-width: 100%;
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
