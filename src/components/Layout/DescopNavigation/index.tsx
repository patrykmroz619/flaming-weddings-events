import Link from 'next/link';
import { Button } from '@/components/common';
import { routes } from '@/routes';
import { NavLink } from './NavLink';
import * as S from './styled';

const arrayOfRoutes = Object.values(routes);

const lastRoute = arrayOfRoutes.pop();

export const DescopNavigation = () => (
  <S.Nav>
    <S.LinksList>
      {arrayOfRoutes.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          title={link.title}
          subroutes={link.subroutes}
        />
      ))}
      {lastRoute && (
        <Link href={lastRoute.href}>
          <Button as="a" title={lastRoute.title}>
            {lastRoute.title}
          </Button>
        </Link>
      )}
    </S.LinksList>
  </S.Nav>
);
