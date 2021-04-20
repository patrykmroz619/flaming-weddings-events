import { DescopNavigation } from './DescopNavigation';
import { MobileNavigation } from './MobileNavigation';

import * as S from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <MobileNavigation />
    <DescopNavigation />
    <div>{children}</div>
    <footer>Footer</footer>
  </S.Wrapper>
);

export default Layout;
