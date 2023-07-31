import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import InconsolataFont from '../font/Inconsolata-Light.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataFont}) format('truetype');
  }

  body {
    margin: 0;
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: #616161;
  justify-content: space-between;
  margin-left: 2rem;
  align-items: center;
  padding: ${({ hasSubMenu }) => (hasSubMenu ? '2em 0.5em 1em 0.5em' : '0.5em')};
  list-style: none;
  height: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Inconsolata', monospace;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #202020;
  }
`;


const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 1.3em;
  padding-left: 3.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #616161;
  font-family: 'Inconsolata', monospace;
  font-size: 17px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  font-family: 'Inconsolata', monospace;
  transition: all 0.1s ease-in-out;

  &:hover {
  color: #202020;
  }
`;

  const SubMenu = ({ item, closeSubmenu }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <GlobalStyle />
      <SidebarLink to={item.subNav ? '#' : item.path} onClick={item.subNav ? showSubnav : null} hasSubMenu={item.subNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
      </SidebarLink>
      <div>
        {item.subNav && subnav && (
          item.subNav.map((subItem, index) => (
            <DropdownLink
              to={subItem.path}
              key={index}
              isOpen={subnav}
              onClick={closeSubmenu}
            >
              {subItem.icon}
              <SidebarLabel>{subItem.title}</SidebarLabel>
            </DropdownLink>
          ))
        )}
      </div>
    </>
  );
};

export default SubMenu;
