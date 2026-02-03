import ZigzagSection from './ZigzagSection';
import { Check, X } from 'lucide-react';
import sectionImage from '@/assets/section-differentiation.jpg';

const Differentiation = () => {
  return (
    <ZigzagSection
      title="Bénéfices d'une bonne gestion de la paie"
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Gestion de paie professionnelle" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-6">
        {/* What we deliver */}
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 justify-center lg:justify-start">
            <Check className="w-5 h-5 text-primary" />
            Sécurité et contrôle des coûts :
          </h3>
          <ul className="space-y-2 lg:ml-7">
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Paie fiable et conforme → zéro risque légal</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Processus maîtrisé → gain de temps pour vos managers</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Climat social stable → employés motivés</span>
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-left">Données claires → visibilité sur la masse salariale</span>
            </li>
          </ul>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default Differentiation;
