import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import routes from '../../config/routes';
import { deviceSize } from '../../utils/device';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 100px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  background: Tomato;
  padding: 1rem 0 0 0;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const Toggle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: tomato;
  left: 10px;
  top: 10px;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;
`;

const SideBar = () => {
  const [isMobile, setMobile] = useState(false);
  const [isVisible, setVisibility] = useState(false);

  const resize = () => {
    let currentHideNav = window.innerWidth < deviceSize.tablet;
    setMobile(currentHideNav);
  };

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    // TODO: Use debouce function here
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (isMobile && !isVisible) return <Toggle onClick={toggleVisibility} />;

  return (
    <Wrapper>
      <Menu>
        {routes.map((route, idx) => (
          <Item to={route.to} icon={route.icon} key={idx}>
            {route.title}
          </Item>
        ))}
      </Menu>
      <ToggleButton onClick={toggleVisibility}>Hide</ToggleButton>
    </Wrapper>
  );
};

export default SideBar;
