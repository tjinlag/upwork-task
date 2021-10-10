import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  ${({ active = false }: { active: boolean }) =>
    active &&
    `
    border: 1px solid white;
    border-radius: 20px;
  `}
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

interface Props {
  icon?: string;
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Item = ({ to, icon, children, onClick }: Props) => {
  const { asPath } = useRouter();
  const isActive = asPath === to;
  return (
    <Link href={to}>
      <Wrapper active={isActive}>
        <Icon style={{ color: 'white' }} src={icon} />
        {children}
      </Wrapper>
    </Link>
  );
};

export default Item;
