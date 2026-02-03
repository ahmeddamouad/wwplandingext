import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import PainPoints from '@/components/landing/PainPoints';
import PersonnelCostRisk from '@/components/landing/PersonnelCostRisk';
import Differentiation from '@/components/landing/Differentiation';
import PersonnelCostBenefits from '@/components/landing/PersonnelCostBenefits';
import Methodology from '@/components/landing/Methodology';
import FinalCTA from '@/components/landing/FinalCTA';
import ContactFormSection from '@/components/landing/ContactFormSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustedCompanies />
        <PainPoints />
        <PersonnelCostRisk />
        <Differentiation />
        <PersonnelCostBenefits />
        <Methodology />
        <FinalCTA />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
