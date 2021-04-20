import { minWidth, breakpoints } from '@/style/media';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: none;
  ${minWidth(breakpoints.xl)} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: ${({ theme }) => theme.spacing.s};
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    width: 95%;
    max-width: ${({ theme }) => theme.contentWidth};
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
