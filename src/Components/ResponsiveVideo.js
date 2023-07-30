import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Apply responsive styles only when width is greater than or equal to 768px */
  @media (min-width: 768px) {
    /* You can adjust the min-width value as per your requirements */
    padding-top: 56.25%; /* This maintains a 16:9 aspect ratio for the video */
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const ResponsiveVideo = ({ src }) => {
  return (
    <VideoContainer>
      <VideoWrapper>
        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </VideoContainer>
  );
};

export default ResponsiveVideo;
