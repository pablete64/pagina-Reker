import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesOverview from '@/components/home/ServicesOverview';
import IndustriesSection from '@/components/home/IndustriesSection';
import ProcessSection from '@/components/home/ProcessSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ClientsStrip from '@/components/home/ClientsStrip';
import CTABand from '@/components/home/CTABand';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <IndustriesSection />
      <ProcessSection />
      <FeaturedProjects />
      <ClientsStrip />
      <CTABand />
    </Layout>
  );
};

export default Index;
