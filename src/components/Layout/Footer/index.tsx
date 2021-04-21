import { Container } from '@/components/common';
import Link from 'next/link';
import * as S from './styled';

export const Footer = () => (
  <S.Footer>
    <Container>
      <S.Text>
        <span>&copy; 2021 Flaming weddings & events</span>
        <span>
          Realizacja:{` `}
          <Link href="https://patrykmroz.pl" passHref>
            <a title="patrykmroz.pl">Patryk Mróz</a>
          </Link>
        </span>
      </S.Text>
    </Container>
  </S.Footer>
);
