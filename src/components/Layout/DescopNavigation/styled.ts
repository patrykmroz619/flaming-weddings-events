import { Container } from '@/components/common';
import { minWidth, breakpoints } from '@/style/media';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: none;
  ${minWidth(breakpoints.xl)} {
    display: block;
    position: absolute;
    top: ${({ theme }) => theme.spacing.s};
    z-index: 1;
    width: 100%;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
