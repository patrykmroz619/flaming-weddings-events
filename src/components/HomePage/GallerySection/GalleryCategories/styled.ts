import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Container } from '@/components/common';

export const CategoriesWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Category = styled(motion.article)`
  position: relative;
  margin: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.xs}`};
  background-color: black;
`;

export const CategoryHeading = styled(motion.h3)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
`;

export const ImageWrapper = styled(motion.div)`
  opacity: 0.8;
`;
