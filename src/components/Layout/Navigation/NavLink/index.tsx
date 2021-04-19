import { useMemo, useRef } from 'react';
import Link from 'next/link';

import { useHoverListener } from '@/utils/useHoverListener';
import { AnimatePresence } from 'framer-motion';
import { NavSublink } from './NavSublink';
import * as S from './styled';

type NavLinkProps = NavLinkData;

export const NavLink = ({ href, title, subLinks }: NavLinkProps) => {
  const sublinksComponents = useMemo(
    () =>
      subLinks?.map((link, index) => (
        <NavSublink key={link.href} index={index} {...link} />
      )),
    [subLinks],
  );

  const linkRef = useRef<HTMLLIElement>(null);
  const isLinkHovered = useHoverListener(linkRef);

  return (
    <S.NavLinkWrapper ref={linkRef}>
      <Link href={href}>
        <S.NavLink title={title}>{title}</S.NavLink>
      </Link>
      {subLinks && (
        <S.SublinksList>
          <AnimatePresence>
            {isLinkHovered && sublinksComponents}
          </AnimatePresence>
        </S.SublinksList>
      )}
    </S.NavLinkWrapper>
  );
};
