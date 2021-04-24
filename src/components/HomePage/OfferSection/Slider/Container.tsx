import { useMemo, useState } from 'react';

import { SliderContext } from './context';

import * as S from './styled';

type ContainerProps = {
  children: React.ReactNode;
  initialSlide: string;
};

export const Container = ({ children, initialSlide }: ContainerProps) => {
  const [activeSlide, setActiveSlide] = useState<string>(initialSlide);

  const contextValue = useMemo(() => ({ activeSlide, setActiveSlide }), [
    activeSlide,
    setActiveSlide,
  ]);

  return (
    <SliderContext.Provider value={contextValue}>
      <S.Slider>{children}</S.Slider>
    </SliderContext.Provider>
  );
};
