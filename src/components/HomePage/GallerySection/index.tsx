import Link from 'next/link';

import { Container, Heading } from '@/components/common';
import { GalleryCategories } from './GalleryCategories';
import * as S from './styled';

type GalleryCategory = {
  title: string;
  imageSrc: string;
};

const galleryCategories: GalleryCategory[] = [
  {
    title: `Wesela`,
    imageSrc: `/images/offer/wesela.jpg`,
  },
  {
    title: `Cocktaile`,
    imageSrc: `/images/offer/eventy.jpg`,
  },
  {
    title: `Pokazy`,
    imageSrc: `/images/offer/dodatki.jpg`,
  },
  {
    title: `Bary`,
    imageSrc: `/images/offer/wesela.jpg`,
  },
  {
    title: `Dekoracje`,
    imageSrc: `/images/offer/dodatki.jpg`,
  },
  {
    title: `Dodatki`,
    imageSrc: `/images/offer/wesela.jpg`,
  },
];

export const GallerySection = () => (
  <S.Section>
    <Heading>Galeria</Heading>
    <Container>
      <S.Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni impedit
        facere voluptatibus corporis iusto obcaecati voluptas consectetur
        corrupti. Facere, nisi?
      </S.Paragraph>
      <GalleryCategories.Wrapper>
        {galleryCategories.map((category) => (
          <GalleryCategories.Category {...category} />
        ))}
      </GalleryCategories.Wrapper>
      <Link href="/galeria" passHref>
        <S.Link as="a">Zobacz więcej</S.Link>
      </Link>
    </Container>
  </S.Section>
);
