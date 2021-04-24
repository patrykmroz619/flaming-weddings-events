import Link from 'next/link';

import { routes } from '@/routes';

import * as S from './styled';

export const AboutSection = () => (
  <S.Section>
    <S.ContentWrapper>
      <S.Box>
        <S.StyledHeading>
          <span>Cześć,</span> tu Paweł
        </S.StyledHeading>
        <S.Paragraph>
          Założyciel firmy Flaming weddings & events. Lorem ipsum dolor sit amet
        </S.Paragraph>
        <Link href={routes.about.href} passHref>
          <S.Btn as="a" title={routes.about.title}>
            Poznaj mnie
          </S.Btn>
        </Link>
      </S.Box>
      <S.PhotoContainer />
    </S.ContentWrapper>
  </S.Section>
);
