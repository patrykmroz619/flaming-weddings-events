import { routes } from '@/routes';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

const arrayOfRoutes = Object.values(routes);

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export const LinksList = () => (
  <motion.ul initial="close" animate="open" variants={variants}>
    {arrayOfRoutes.map((route) => (
      <NavLink key={route.href} route={route} />
    ))}
  </motion.ul>
);
