import React, { useState } from "react";
import styled from "styled-components";

// Dummy data for courses and videos (Replace with real data)
const courses = [
  {
    id: 1,
    title: "Astronomy",
    videos: [
      {
        id: 1,
        title: "Exploring the Cosmos",
        url: "https://www.example.com/video1.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
      {
        id: 2,
        title: "Black Holes Explained",
        url: "https://www.example.com/video2.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
    ],
  },
  {
    id: 2,
    title: "Marine Biology",
    videos: [
      {
        id: 3,
        title: "Deep Sea Wonders",
        url: "https://www.example.com/video3.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
      {
        id: 4,
        title: "Coral Reefs",
        url: "https://www.example.com/video4.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
    ],
  },
  {
    id: 3,
    title: "History",
    videos: [
      {
        id: 5,
        title: "Ancient Civilizations",
        url: "https://www.example.com/video5.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
      {
        id: 6,
        title: "World Wars",
        url: "https://www.example.com/video6.mp4",
        thumbnail: "https://via.placeholder.com/200x150",
      },
    ],
  },
];

export const OfficialVideo = ({ id }) => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [selectedVideo, setSelectedVideo] = useState(selectedCourse.videos[0]);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    setSelectedVideo(course.videos[0]);
  };

  return (
    <Section id={id}>
      <Container>
        <Sidebar>
          {courses.map((course) => (
            <CourseItem
              key={course.id}
              onClick={() => handleCourseChange(course)}
              isActive={selectedCourse.id === course.id}
            >
              {course.title}
            </CourseItem>
          ))}
        </Sidebar>

        <MainContent>
          <VideoPlayer>
            <video controls width="100%">
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Title>{selectedVideo.title}</Title>
          </VideoPlayer>
          <VideoGrid>
            {selectedCourse.videos.map((video) => (
              <VideoThumbnail
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                isActive={selectedVideo.id === video.id}
              >
                <ThumbnailImage src={video.thumbnail} alt={video.title} />
                <ThumbnailTitle>{video.title}</ThumbnailTitle>
              </VideoThumbnail>
            ))}
          </VideoGrid>
        </MainContent>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 20%;
  background-color: #fff;
  padding: 1rem;
  border-right: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

const CourseItem = styled.div`
  color: ${(props) => (props.isActive ? "white" : "black")};
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#d0b072" : "#f5f5f5")};
  margin-bottom: 1rem;
  padding: 20px 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0b072;
    color: white;
  }
`;

const VideoPlayer = styled.div`
  position: relative;
  background-color: #000;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: #fff;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const VideoThumbnail = styled.div`
  cursor: pointer;
  border: 2px solid ${(props) => (props.isActive ? "#d0b072" : "transparent")};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #d0b072;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ThumbnailTitle = styled.p`
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  background-color: #fff;
  margin: 0;
`;
