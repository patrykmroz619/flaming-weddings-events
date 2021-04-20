import { useState } from 'react';
import Image from 'next/image';
import { AnimateSharedLayout } from 'framer-motion';

import { LinksList } from './LinksList';
import * as S from './styled';
import { Toggler } from './Toggler';

export const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleTogglerClick = () => setOpen((prev) => !prev);

  return (
    <AnimateSharedLayout>
      <S.Nav layout>
        <S.Header layout>
          <Image src="/icons/logo.png" width="35" height="35" />
          <Toggler isActive={isOpen} handleClick={handleTogglerClick} />
        </S.Header>
        {isOpen && <LinksList />}
      </S.Nav>
    </AnimateSharedLayout>
  );
};
