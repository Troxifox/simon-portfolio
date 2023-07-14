import React from 'react';
import Gallery from '../Components/Gallery';
import styled from 'styled-components';

export const Work = () => {
  const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    // Add more image URLs for work1
  ];

  return (
    <div className="work">
      <Gallery />
      <VideoContainer>
        <iframe
          src="https://player.vimeo.com/video/773623654?h=9fd29a2bb1"
          width="640"
          height="1138"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </div>
  );
};

const VideoContainer = styled.div`
  padding: 0 12px;
`;

export const WorkTwo = () => {
  const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    // Add more image URLs for work2
  ];

  return (
    <div className="work">
      <Gallery />
    </div>
  );
};

export const WorkThree = () => {
  const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    // Add more image URLs for work3
  ];

  return (
    <div className="work">
      <Gallery />
    </div>
  );
};
