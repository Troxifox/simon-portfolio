import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import NavbarHeader from './NavbarHeader';
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

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: auto; /* Added margin-left: auto to push the icon to the right */
  margin-right: 1rem; /* Added margin-right: 1rem to move the icon slightly to the left */
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  visibility: ${({ sidebar }) => (sidebar ? 'hidden' : 'visible')};
`;



const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: calc(100vh - 80px); /* Subtract 80px from the height */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80px; /* Updated to 80px */
  left: ${({ sidebar }) => (sidebar ? '0' : '-250px')};
  transition: left 0.3s ease-in-out;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 100%;
    top: 0px;
    height: 100%;
    left: ${({ sidebar, shouldCloseSidebar }) =>
      sidebar && !shouldCloseSidebar ? '0' : '100%'};
  }
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [shouldCloseSidebar, setShouldCloseSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showSidebar = () => setSidebar(!sidebar);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setSidebar(true);
      setShouldCloseSidebar(false);
    } else {
      setSidebar(false);
    }
  }, [windowWidth]);

const [sidebarVisible, setSidebarVisible] = useState(sidebar);

useEffect(() => {
  setSidebarVisible(sidebar);
}, [sidebar]);

const handleItemClick = (event, item) => {
  if (windowWidth <= 768) {
    setShouldCloseSidebar(true);
    setSidebar(false);
    setSidebarVisible(false);
  } else if (item.subMenu) {
    setSidebar(!sidebar);
    setSidebarVisible(!sidebarVisible);
  }
};



useEffect(() => {
  if (shouldCloseSidebar) {
    setSidebarVisible(false); // Close the sidebar
  }
}, [shouldCloseSidebar]);




  return (
    <>
      <GlobalStyle />
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav>
            <NavbarHeader name="simon" secname="bad's production" /> {/* Add NavbarHeader component here */}
          <NavIcon to="#" sidebar={sidebar}>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: 'grey' }} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar || windowWidth > 768} shouldCloseSidebar={shouldCloseSidebar}>
          <SidebarWrap>
            {windowWidth <= 768 && (
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
            )}
            {SidebarData.map((item, index) => (
              <SubMenu
                onClick={showSidebar} 
                item={item}
                key={index}
              />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
