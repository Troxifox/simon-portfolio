import React from 'react';
import styled from 'styled-components';

const NavbarHeaderContainer = styled.div`
  background: #353b3c;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;






const Name = styled.h1`
  margin-left: 2rem;
  color: #fff;
`;

const NavbarHeader = ({ name }) => {
  return (
    <NavbarHeaderContainer>
      <Name>{name}</Name>
    </NavbarHeaderContainer>
  );
};

export default NavbarHeader;