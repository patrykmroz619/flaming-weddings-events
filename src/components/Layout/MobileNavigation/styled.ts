import { breakpoints, minWidth } from '@/style/media';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 0px 10px 2px gray;

  ${minWidth(breakpoints.xl)} {
    display: none;
  }
`;

export const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;
