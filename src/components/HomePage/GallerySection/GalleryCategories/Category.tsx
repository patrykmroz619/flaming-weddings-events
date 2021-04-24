import { useContext } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { GalleryCategoriesContext } from './context';

import * as S from './styled';

type CategoryProps = {
  title: string;
  imageSrc: string;
};

const wrapperVariants = {
  active: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  inactive: {
    scale: 1.01,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  active: {
    opacity: 0.5,
  },
  inactive: {
    opacity: 0.9,
  },
};

const headingVariants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

export const Category = ({ title, imageSrc }: CategoryProps) => {
  const { activeCategory, setActiveCategory } = useContext(
    GalleryCategoriesContext,
  );

  const isActive = activeCategory === title || activeCategory === null; // default display all categories as active when activeCategory is null

  const onHoverStart = () => setActiveCategory(title);

  return (
    <Link href={`/galeria/#${title}`}>
      <a>
        <S.Category
          animate={isActive ? `active` : `inactive`}
          variants={wrapperVariants}
          onMouseEnter={onHoverStart}
        >
          <S.CategoryHeading variants={headingVariants}>
            {title}
          </S.CategoryHeading>
          <S.ImageWrapper variants={imageVariants}>
            <Image src={imageSrc} width="320" height="213" />
          </S.ImageWrapper>
        </S.Category>
      </a>
    </Link>
  );
};
