import { useState } from 'react';
import Image from 'next/image';
import { AnimateSharedLayout } from 'framer-motion';

import { Container } from '@/components/common';
import { LinksList } from './LinksList';
import * as S from './styled';
import { Toggler } from './Toggler';

export const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleTogglerClick = () => setOpen((prev) => !prev);

  return (
    <AnimateSharedLayout>
      <S.Nav layout>
        <Container>
          <S.Header layout>
            <Image src="/icons/logo.png" width="35" height="35" />
            <Toggler isActive={isOpen} handleClick={handleTogglerClick} />
          </S.Header>
        </Container>
        {isOpen && <LinksList />}
      </S.Nav>
    </AnimateSharedLayout>
  );
};
