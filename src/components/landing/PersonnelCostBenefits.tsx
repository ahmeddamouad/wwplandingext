import ZigzagSection from './ZigzagSection';
import { Check, TrendingUp } from 'lucide-react';
import sectionImage from '@/assets/PersonnelCostBenefits.jpg';

const PersonnelCostBenefits = () => {
  return (
    <ZigzagSection
      title="Bénéfices d'une bonne gestion des coûts du personnel"
      subtitle="Optimiser votre masse salariale et chaque heure travaillée"
      reverse={false}
      bgColor="secondary"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Optimisation des coûts du personnel" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <ul className="space-y-3">
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Décider <strong>quand recruter ou externaliser</strong> selon vos besoins réels</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Réduire les coûts cachés et les charges inutiles</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Maximiser la productivité de chaque collaborateur</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Piloter la masse salariale en alignement avec la stratégie business</span>
            </li>
          </ul>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-center">
            <p className="text-sm sm:text-base text-foreground font-semibold text-center">
              Votre personnel devient un <span className="text-primary">levier de croissance</span>, pas une charge aveugle.
            </p>
          </div>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostBenefits;
