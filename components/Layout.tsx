import React, { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';
import Header from './Header';
import { deviceSize } from '../utils/device';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1 1 600px;
  overflow-y: auto;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMobile, setMobile] = useState(false);
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (isMobile && isVisible) {
      setVisibility(false);
    }
  }, [isMobile, isVisible]);

  const resize = () => {
    setMobile(window.innerWidth < deviceSize.tablet);
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

  return (
    <Wrapper>
      {isVisible && <SideBar onHide={toggleVisibility} />}
      <Content>
        <Header sideBar={!isVisible} onSideBarClick={toggleVisibility} />
        <div style={{ marginTop: 50 }}>{children}</div>
      </Content>
    </Wrapper>
  );
};

export default Layout;
