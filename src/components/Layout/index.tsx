import { DescopNavigation } from './DescopNavigation';
import { Footer } from './Footer';
import { MobileNavigation } from './MobileNavigation';
import { Socials } from './Socials';

import * as S from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <MobileNavigation />
    <DescopNavigation />
    <Socials />
    <div>{children}</div>
    <Footer />
  </S.Wrapper>
);

export default Layout;
