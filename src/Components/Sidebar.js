import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #353b3c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  visibility: ${({ sidebar }) => (sidebar ? 'hidden' : 'visible')};
`;

const SidebarNav = styled.nav`
  background: #353b3c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-250px')};
  transition: left 0.3s ease-in-out;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 100%;
    left: ${({ sidebar, shouldCloseSidebar }) =>
      sidebar && !shouldCloseSidebar ? '0' : '-100%'};
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

  const handleItemClick = (event, item) => {
    if (windowWidth <= 768) {
      setShouldCloseSidebar(true);
    }
    if (item.subMenu) {
      setSidebar(!sidebar);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#" sidebar={sidebar}>
            <FaIcons.FaBars onClick={showSidebar} />
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
                item={item}
                key={index}
                onItemClick={(e) => handleItemClick(e, item)}
              />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
