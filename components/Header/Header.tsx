import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #0596d8;
  width: 100%;
  height: 40px;
  color: white;
  position: fixed;
  display: flex;
  flex-direction: row;
`;

const Toggle = styled.div`
  width: 40px;
  height: 40px;
  background-color: tomato;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

interface Props {
  sideBar?: boolean;
  onSideBarClick?: () => void;
}

const Header = ({ sideBar, onSideBarClick }: Props) => {
  return (
    <Wrapper>
      {sideBar && <Toggle onClick={onSideBarClick} />}
      <Content>This is the Header</Content>
    </Wrapper>
  );
};

export default Header;
