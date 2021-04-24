import { Slider } from './Slider';

import * as S from './styled';

export const OfferSection = () => (
  <S.Section>
    <S.StyledHeading>Oferta</S.StyledHeading>
    <Slider.Container initialSlide="Wesela">
      <Slider.Slide
        title="Wesela"
        link={{ href: `/oferta/wesela`, title: `Oferta` }}
        imageSrc="/images/offer/wesela.jpg"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        aspernatur quas corrupti quia perferendis illum ad. Doloremque maiores a
        maxime.
      </Slider.Slide>
      <Slider.Slide
        title="Eventy"
        link={{ href: `/oferta/eventy`, title: `Oferta` }}
        imageSrc="/images/offer/eventy.jpg"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        aspernatur quas corrupti quia perferendis illum ad. Doloremque maiores a
        maxime.
      </Slider.Slide>
      <Slider.Slide
        title="Atrakcje dodatkowe"
        link={{ href: `/oferta/dodatki`, title: `Oferta` }}
        imageSrc="/images/offer/dodatki.jpg"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        aspernatur quas corrupti quia perferendis illum ad. Doloremque maiores a
        maxime.
      </Slider.Slide>
    </Slider.Container>
  </S.Section>
);
