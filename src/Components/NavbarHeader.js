import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import InconsolataFont from '../font/Inconsolata-Light.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataFont});
  }

  body {
    margin: 0;
  }
`;

const NavbarHeaderContainer = styled.div`
  background: #fff;
  height: 80px;
  width: 250px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;

const SmallName = styled.h2`
  margin-left: 3rem;
  font-size: 1.2rem;
  font-family: 'Inconsolata', monospace;
  cursor: pointer;
`;

const SmallNameSmaller = styled(SmallName)`
  font-size: 0.9rem;
`;

const NavbarHeader = ({ name, secname }) => {
  return (
    <>
      <GlobalStyle />
      <NavbarHeaderContainer>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SmallName style={{ color: '#000' }}>{name}</SmallName>
          </Link>
          <SmallNameSmaller style={{ color: '#666' }}>{secname}</SmallNameSmaller>
        </div>
      </NavbarHeaderContainer>
    </>
  );
};

export default NavbarHeader;
