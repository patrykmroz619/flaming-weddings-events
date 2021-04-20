import { motion } from 'framer-motion';
import * as S from './styled';

type TogglerProps = { isActive: boolean; handleClick: () => void };

const OuterBelts = {
  open: {
    opacity: 0,
    scale: 0,
  },
  close: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const innerBelts = {
  open: (i: number) => ({
    rotate: i * 45,
    transition: {
      delay: 0.3,
    },
  }),
  close: {
    rotate: 0,
  },
};

export const Toggler = ({ isActive, handleClick }: TogglerProps) => (
  <S.Toggler onClick={handleClick}>
    <motion.div animate={isActive ? `open` : `close`} variants={OuterBelts} />
    <motion.div
      animate={isActive ? `open` : `close`}
      variants={innerBelts}
      custom={1}
    />
    <motion.div
      animate={isActive ? `open` : `close`}
      variants={innerBelts}
      custom={-1}
    />
    <motion.div animate={isActive ? `open` : `close`} variants={OuterBelts} />
  </S.Toggler>
);
