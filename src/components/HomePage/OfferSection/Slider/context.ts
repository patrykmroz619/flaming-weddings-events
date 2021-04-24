import { createContext } from 'react';

type SliderContext = {
  activeSlide: string;
  setActiveSlide: (label: string) => void;
};

export const SliderContext = createContext<SliderContext>({
  activeSlide: ``,
  setActiveSlide: () => null,
});
