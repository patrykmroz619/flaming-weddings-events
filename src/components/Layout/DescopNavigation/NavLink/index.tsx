import { useMemo, useRef } from 'react';
import Link from 'next/link';

import { useHoverListener } from '@/utils/useHoverListener';
import { AnimatePresence } from 'framer-motion';
import { NavSublink } from './NavSublink';
import * as S from './styled';

type NavLinkProps = PageRoute;

export const NavLink = ({ href, title, subroutes }: NavLinkProps) => {
  const sublinksComponents = useMemo(
    () =>
      subroutes?.map((link, index) => (
        <NavSublink key={link.href} index={index} {...link} />
      )),
    [subroutes],
  );

  const linkRef = useRef<HTMLLIElement>(null);
  const isLinkHovered = useHoverListener(linkRef);

  return (
    <S.NavLinkWrapper ref={linkRef}>
      <Link href={href}>
        <S.NavLink title={title}>{title}</S.NavLink>
      </Link>
      {subroutes && (
        <S.SublinksList>
          <AnimatePresence>
            {isLinkHovered && sublinksComponents}
          </AnimatePresence>
        </S.SublinksList>
      )}
    </S.NavLinkWrapper>
  );
};
