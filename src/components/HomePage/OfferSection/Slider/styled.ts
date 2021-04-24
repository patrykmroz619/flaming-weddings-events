import { Button } from '@/components/common';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Slider = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: row;
  }
`;

export const Slide = styled(motion.div)`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.m}`};
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;

  @media (orientation: landscape) {
    min-height: 100%;
  }
`;

export const SlideImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (orientation: landscape) {
    position: fixed;
    z-index: -2;
  }
`;

export const SlideHeading = styled(motion.h3)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.light};
  user-select: none;
`;

export const SlideContent = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  max-width: 350px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  user-select: none;
`;

export const SlideButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s} auto;
`;
