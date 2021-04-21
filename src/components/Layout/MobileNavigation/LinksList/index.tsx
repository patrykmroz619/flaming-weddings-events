import { motion } from 'framer-motion';

import { routes } from '@/routes';

import { Container } from '@/components/common';
import { NavLink } from './NavLink';

const arrayOfRoutes = Object.values(routes);

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export const LinksList = () => (
  <motion.ul initial="close" animate="open" variants={variants}>
    <Container>
      {arrayOfRoutes.map((route) => (
        <NavLink key={route.href} route={route} />
      ))}
    </Container>
  </motion.ul>
);
