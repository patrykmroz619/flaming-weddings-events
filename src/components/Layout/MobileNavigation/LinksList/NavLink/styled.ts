import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.li)`
  position: relative;
  text-align: center;
`;

export const Link = styled.a`
  display: block;
  margin: ${({ theme }) => theme.spacing.xs} 0;
  padding: 10px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.02);
`;

export const Sublink = styled(Link)`
  color: ${({ theme }) => theme.colors.font};
  font-weight: normal;
  padding: 2px;
  background-color: transparent;
`;
