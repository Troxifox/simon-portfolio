import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';

const SocialIconsContainer = styled.div`
  display: flex;
    padding-left: 3em;
    padding-top: 0.5em;
    align-items: center;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: 20px;
  text-decoration: none;
    padding: 0.5em;
  &:last-child {
    margin-right: 0;
  }
`;

const SocialMediaIcons = () => {
  return (
    <SocialIconsContainer>
      <SocialIcon href="https://www.instagram.com/simon" target="_blank">
        <FaIcons.FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://www.youtube.com/simon" target="_blank">
        <FaIcons.FaYoutube />
      </SocialIcon>
      <SocialIcon href="https://www.twitter.com/simon" target="_blank">
        <FaIcons.FaTwitter />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialMediaIcons;
