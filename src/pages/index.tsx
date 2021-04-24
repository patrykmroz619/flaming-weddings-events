import { AboutSection, MainSection, OfferSection } from '@/components/HomePage';
import Layout from '@/components/Layout';

export const Home = () => (
  <Layout>
    <MainSection />
    <AboutSection />
    <OfferSection />
    <section style={{ height: `600px`, backgroundColor: `#fefefe` }} />
  </Layout>
);

export default Home;
