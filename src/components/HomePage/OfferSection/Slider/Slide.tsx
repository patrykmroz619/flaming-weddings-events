import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import { useHandleSlide } from './useHandleSlide';

import * as S from './styled';

type SlideProps = {
  children: React.ReactNode;
  imageSrc: string;
  title: string;
  link: {
    title: string;
    href: string;
  };
};

const imageVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const slideVariants = {
  visible: {
    backgroundColor: `#00000055`,
  },
  hidden: {
    backgroundColor: `#000000cc`,
  },
};

const contentVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const Slide = ({ imageSrc, title, link, children }: SlideProps) => {
  const [isContentVisible, onHoverStart] = useHandleSlide(title);

  return (
    <AnimateSharedLayout>
      <S.Slide
        animate={isContentVisible ? `visible` : `hidden`}
        variants={slideVariants}
        onMouseEnter={onHoverStart}
        onTouchStart={onHoverStart}
      >
        <S.SlideHeading layout>{title}</S.SlideHeading>
        <AnimatePresence>
          {isContentVisible && (
            <S.SlideContent
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
            >
              <p>{children}</p>
              <Link href={link.href} passHref>
                <S.SlideButton title={link.title}>{link.title}</S.SlideButton>
              </Link>
            </S.SlideContent>
          )}
        </AnimatePresence>
        <S.SlideImage variants={imageVariants}>
          <Image src={imageSrc} layout="fill" objectFit="cover" />
        </S.SlideImage>
      </S.Slide>
    </AnimateSharedLayout>
  );
};
