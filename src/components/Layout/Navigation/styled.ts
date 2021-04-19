import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: ${({ theme }) => theme.spacing.s};
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${({ theme }) => theme.contentWidth};
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
