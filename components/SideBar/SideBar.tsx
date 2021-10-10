import React from 'react';
import styled from 'styled-components';
import routes from '../../config/routes';
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

const ToggleButton = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;
`;

interface Props {
  onHide: () => void;
}

const SideBar = ({ onHide }: Props) => {
  return (
    <Wrapper>
      <Menu>
        {routes.map((route, idx) => (
          <Item to={route.to} icon={route.icon} key={idx}>
            {route.title}
          </Item>
        ))}
      </Menu>
      <ToggleButton onClick={onHide}>Hide</ToggleButton>
    </Wrapper>
  );
};

export default SideBar;
