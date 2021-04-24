import Link from 'next/link';

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
    <S.Heading>Galeria</S.Heading>
    <GalleryCategories.Wrapper>
      {galleryCategories.map((category) => (
        <GalleryCategories.Category {...category} />
      ))}
    </GalleryCategories.Wrapper>
    <Link href="/galeria" passHref>
      <S.Link as="a">Zobacz więcej</S.Link>
    </Link>
  </S.Section>
);
