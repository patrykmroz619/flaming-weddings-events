import Link from 'next/link';
import { Button } from '@/components/common';
import { NavLink } from './NavLink';
import * as S from './styled';

const links: NavLinkData[] = [
  {
    href: `/`,
    title: `Strona główna`,
  },
  {
    href: `/o-mnie`,
    title: `O mnie`,
  },
  {
    href: `/oferta`,
    title: `Oferta`,
    subLinks: [
      {
        href: `/oferta/wesela`,
        title: `Wesela`,
      },
      {
        href: `/oferta/eventy`,
        title: `Eventy`,
      },
      {
        href: `/oferta/bary`,
        title: `Bary`,
      },
    ],
  },
  {
    href: `/galeria`,
    title: `Galeria`,
  },
];

export const Navigation = () => (
  <S.Nav>
    <S.LinksList>
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          title={link.title}
          subLinks={link.subLinks}
        />
      ))}
      <Link href="/kontakt">
        <Button>Kontakt</Button>
      </Link>
    </S.LinksList>
  </S.Nav>
);
