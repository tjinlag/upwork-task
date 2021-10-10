import React from 'react';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1 1 600px;
  overflow-y: auto;
  padding: 5px 20px;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <SideBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
