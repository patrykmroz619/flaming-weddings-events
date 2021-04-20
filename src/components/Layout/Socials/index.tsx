import Image from 'next/image';
import Link from 'next/link';
import * as S from './styled';

export const Socials = () => (
  <S.SocialsWrapper>
    <Link href="https://www.facebook.com/flamingcocktailbar" passHref>
      <S.SocialLink title="Facebook" aria-label="Profil na Facebook">
        <Image src="/icons/facebook.svg" width="20" height="20" />
      </S.SocialLink>
    </Link>
    <Link href="https://www.instagram.com/flamingcocktailbar" passHref>
      <S.SocialLink title="Instagram" aria-label="Profil na Instagram">
        <Image src="/icons/instagram.svg" width="20" height="20" />
      </S.SocialLink>
    </Link>
    <Link href="https://www.youtube.com" passHref>
      <S.SocialLink title="YouTube" aria-label="Kanal na YouTube">
        <Image src="/icons/youtube.svg" width="20" height="20" />
      </S.SocialLink>
    </Link>
    <Link href="https://www.weselezklasa.pl/flamingcocktailbar/" passHref>
      <S.SocialLink
        title="Wesele z klasą"
        aria-label="Profil na portalu Wesele z klasą"
      >
        <Image src="/icons/weselezklasa.png" width="20" height="20" />
      </S.SocialLink>
    </Link>
  </S.SocialsWrapper>
);
