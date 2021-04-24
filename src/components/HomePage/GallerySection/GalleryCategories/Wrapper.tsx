import { useMemo, useState } from 'react';

import { GalleryCategoriesContext } from './context';

import * as S from './styled';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const memoizedContextValue = useMemo(
    () => ({
      activeCategory,
      setActiveCategory,
    }),
    [activeCategory, setActiveCategory],
  );

  const handleMouseLeave = () => setActiveCategory(null);

  return (
    <S.CategoriesWrapper onMouseLeave={handleMouseLeave}>
      <GalleryCategoriesContext.Provider value={memoizedContextValue}>
        {children}
      </GalleryCategoriesContext.Provider>
    </S.CategoriesWrapper>
  );
};
