import Image from 'next/image';
import * as S from './styled';

type ContactItemProps = {
  text: string;
  href: string;
  iconSrc: string;
};

export const ContactItem = ({ text, href, iconSrc }: ContactItemProps) => (
  <S.Wrapper>
    <S.IconWrapper>
      <Image src={iconSrc} width="40" height="40" />
    </S.IconWrapper>
    <S.Text>
      <a href={href}>{text}</a>
    </S.Text>
  </S.Wrapper>
);
