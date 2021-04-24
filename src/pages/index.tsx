import {
  AboutSection,
  GallerySection,
  MainSection,
  OfferSection,
} from '@/components/HomePage';
import Layout from '@/components/Layout';

export const Home = () => (
  <Layout>
    <MainSection />
    <AboutSection />
    <OfferSection />
    <GallerySection />
  </Layout>
);

export default Home;
