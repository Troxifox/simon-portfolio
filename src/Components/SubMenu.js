import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #717171;
    border-left: 4px solid #EAF4F4;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 17px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    background: #717171;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const closeSubmenu = () => setSubnav(false);

  return (
    <>
      <SidebarLink to={item.subNav ? '#' : item.path} onClick={item.subNav ? showSubnav : null}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
      </SidebarLink>
      <div>
        {item.subNav && (
          item.subNav.map((subItem, index) => (
            <DropdownLink
              to={subItem.path}
              key={index}
              isOpen={subnav}
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
