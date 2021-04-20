import Link from 'next/link';
import { motion } from 'framer-motion';

import * as S from './styled';

type NavSublinkProps = PageRoute & { index: number };

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: -0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    x: -20,
  },
};

export const NavSublink = ({ href, title, index }: NavSublinkProps) => (
  <motion.li
    key={href}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
    custom={index}
  >
    <Link href={href}>
      <S.Sublink as="a" title={title}>
        {title}
      </S.Sublink>
    </Link>
  </motion.li>
);
