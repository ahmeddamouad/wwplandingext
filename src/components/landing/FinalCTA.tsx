import ZigzagSection from './ZigzagSection';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import sectionImage from '@/assets/section-finalcta.jpg';

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ZigzagSection
      id="contact"
      title="Prenez le contrôle de vos coûts de personnel dès aujourd'hui"
      reverse={false}
      bgColor="secondary"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Croissance et succès" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Données confidentielles</span>
          </div>
        </div>

        <ShimmerButton
          onClick={scrollToForm}
          background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
          shimmerColor="#ffffff"
          className="w-full sm:w-auto text-sm sm:text-base font-semibold flex items-center justify-center gap-2 px-4 py-3"
        >
          <span className="text-center">Demander un devis personnalisé</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        </ShimmerButton>
      </div>
    </ZigzagSection>
  );
};

export default FinalCTA;
