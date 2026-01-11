import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Differentiation from '@/components/landing/Differentiation';
import Methodology from '@/components/landing/Methodology';
import StatsBar from '@/components/landing/StatsBar';
import TrustBadges from '@/components/landing/TrustBadges';
import ExpertiseDomains from '@/components/landing/ExpertiseDomains';
import PricingLogic from '@/components/landing/PricingLogic';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import ContactFormDialog from '@/components/landing/ContactFormDialog';
import { ContactFormProvider, useContactForm } from '@/contexts/ContactFormContext';

const IndexContent = () => {
  const { isOpen, setIsOpen } = useContactForm();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <PainPoints />
        <Differentiation />
        <Methodology />
        <StatsBar />
        <ExpertiseDomains />
        <PricingLogic />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ContactFormDialog open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

const Index = () => {
  return (
    <ContactFormProvider>
      <IndexContent />
    </ContactFormProvider>
  );
};

export default Index;
