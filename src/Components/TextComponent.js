import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  font-family: 'Inconsolata', monospace;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  padding-left: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 1rem;
`;

const TextComponent = ({ title, description }) => {
  return (
    <TextContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextContainer>
  );
};

export default TextComponent;
