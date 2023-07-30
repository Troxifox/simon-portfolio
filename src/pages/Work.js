import React from 'react';
import Gallery from '../Components/Gallery';
import styled from 'styled-components';
import ResponsiveVideo from '../Components/ResponsiveVideo';
import TextComponent from '../Components/TextComponent';

export const Work = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/1f975b1f-1f2a-4ab2-9e99-5b0e90840571/IMG_4107-min.gif?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/594e7871-c870-49b5-9050-d1e946f428d6/IMG_4546-min.gif?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/1f975b1f-1f2a-4ab2-9e99-5b0e90840571/IMG_4107-min.gif?format=2500w',
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
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/0eb63a41-a641-400b-8f5e-29e4145abc7d/DSC05392-positive.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/6ffc0617-62da-45df-ad4a-4289dd732f55/000022.JPG?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/4817e57b-b676-4408-b015-e657fb516ccc/DSC05347-positive.jpg?format=2500w',
  ];

  return (
    <div className="work">
      <Gallery images={images} />
      <ResponsiveVideo src="https://player.vimeo.com/video/773623654?h=9fd29a2bb1" />
      <TextComponent title={"G-Star RAW / Super73"} description={"For G-Star RAW’s 2022 collaboration campaign with Super73 Electric Motorbikes I produced a series of still and motion assets focused in the Shinjuku district of Central Tokyo. "} />
    </div>
  );
};

export const WorkThree = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/7250060f-2d99-4876-8dd1-2581e00192ca/000017.JPG?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/f016ee2c-7352-475b-8e11-52e38d9e0380/000039.JPG?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/61a46cc601b4c521a42206d3/0cea6e79-8740-466e-9421-30de0a1ae51a/000013.JPG?format=2500w',
  ];

  return (
    <div className="work">
      <Gallery images={images} />
      <ResponsiveVideo src="https://player.vimeo.com/video/773623555?h=ec6c524af5" />
      <TextComponent title={"G-Star RAW / Super73"} description={"For G-Star RAW’s 2022 collaboration campaign with Super73 Electric Motorbikes I produced a series of still and motion assets focused in the Shinjuku district of Central Tokyo. "} />
    </div>
  );
};
