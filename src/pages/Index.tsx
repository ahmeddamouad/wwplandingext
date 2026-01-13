import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Differentiation from '@/components/landing/Differentiation';
import Methodology from '@/components/landing/Methodology';
import Testimonials from '@/components/landing/Testimonials';
import PricingLogic from '@/components/landing/PricingLogic';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <PainPoints />
        <Differentiation />
        <Methodology />
        <Testimonials />
        <PricingLogic />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
