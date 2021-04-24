import { createContext } from 'react';

type GalleryCategoriesContext = {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

export const GalleryCategoriesContext = createContext<GalleryCategoriesContext>(
  {
    activeCategory: null,
    setActiveCategory: (category) => category,
  },
);
