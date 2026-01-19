import ZigzagSection from './ZigzagSection';
import SectionIllustration from './SectionIllustration';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowRight, CheckCircle, Rocket, Users } from 'lucide-react';

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ZigzagSection
      id="contact"
      title="Votre nouvel employé est la clé cachée d'une croissance rapide"
      reverse={false}
      bgColor="secondary"
      illustration={
        <SectionIllustration variant="primary">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Profils disponibles</span>
              </div>
              <p className="text-sm text-muted-foreground">Immédiatement</p>
            </div>
          </div>
        </SectionIllustration>
      }
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Réponse rapide</span>
          </div>
        </div>

        <ShimmerButton
          onClick={scrollToForm}
          background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
          shimmerColor="#ffffff"
          className="w-full sm:w-auto text-base font-semibold flex items-center justify-center gap-2"
        >
          Recevoir des profils disponibles immédiatement
          <ArrowRight className="w-5 h-5" />
        </ShimmerButton>
      </div>
    </ZigzagSection>
  );
};

export default FinalCTA;
