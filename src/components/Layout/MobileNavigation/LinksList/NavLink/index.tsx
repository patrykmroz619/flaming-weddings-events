import Link from 'next/link';

import * as S from './styled';

type NavLinkProps = {
  route: PageRoute;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 15,
    opacity: 0,
  },
};

export const NavLink = ({ route }: NavLinkProps) => (
  <S.Wrapper layout variants={variants}>
    <Link href={route.href}>
      <S.Link title={route.title}>{route.title}</S.Link>
    </Link>
    {route.subroutes?.map((subroute) => (
      <Link key={subroute.href} href={subroute.href}>
        <S.Sublink title={subroute.title}>{subroute.title}</S.Sublink>
      </Link>
    ))}
  </S.Wrapper>
);
