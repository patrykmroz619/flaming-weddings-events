import Link from 'next/link';
import Image from 'next/image';

import { routes } from '@/routes';

import * as S from './styled';

export const MainSection = () => (
  <S.Main>
    <S.BackgroundWrapper>
      <Image
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </S.BackgroundWrapper>
    <S.Hero>
      <S.Heading>
        Flaming
        <br />
        Weddings & Events
      </S.Heading>
      <S.Subheading>Barman na Twoją imprezę!</S.Subheading>
      <Link href={routes.offer.href} passHref>
        <S.Btn as="a" title={routes.offer.title} type="button">
          Oferta
        </S.Btn>
      </Link>
    </S.Hero>
  </S.Main>
);
