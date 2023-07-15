import React from 'react';
import Gallery from '../Components/Gallery';
import styled from 'styled-components';
import ResponsiveVideo from '../Components/ResponsiveVideo';
import TextComponent from '../Components/TextComponent';

export const Work = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/05a0275a-3a5d-4a3f-8325-efd3285cfa38/GStarSuper73-84.JPG?format=300w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/05a0275a-3a5d-4a3f-8325-efd3285cfa38/GStarSuper73-84.JPG?format=300w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/05a0275a-3a5d-4a3f-8325-efd3285cfa38/GStarSuper73-84.JPG?format=300w',
    // Add more image URLs for work1
  ];

  return (
    <div className="work">
      <Gallery images={images} />
      <ResponsiveVideo src="https://player.vimeo.com/video/773623654?h=9fd29a2bb1" />
      <TextComponent title={"G-Star RAW / Super73"} description={"For G-Star RAW’s 2022 collaboration campaign with Super73 Electric Motorbikes I produced a series of still and motion assets focused in the Shinjuku district of Central Tokyo. "} />
    </div>
  );
};

const VideoContainer = styled.div`
  padding: 0 12px;
  position: relative;
  width: 100%;
`;

export const WorkTwo = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/05a0275a-3a5d-4a3f-8325-efd3285cfa38/GStarSuper73-84.JPG?format=300w',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    // Add more image URLs for work2
  ];

  return (
    <div className="work">
      <Gallery images={images} />
    </div>
  );
};

export const WorkThree = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/05a0275a-3a5d-4a3f-8325-efd3285cfa38/GStarSuper73-84.JPG?format=300w',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    // Add more image URLs for work3
  ];

  return (
    <div className="work">
      <Gallery images={images} />
    </div>
  );
};
