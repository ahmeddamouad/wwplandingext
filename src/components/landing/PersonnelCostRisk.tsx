import ZigzagSection from './ZigzagSection';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import sectionImage from '@/assets/section-methodology.jpg';

const PersonnelCostRisk = () => {
  return (
    <ZigzagSection
      title="La charge salariale mal maîtrisée : un risque à ne pas prendre"
      subtitle="Le vrai coût d'un personnel mal maîtrisé :"
      reverse={false}
      bgColor="secondary"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Coûts du personnel mal maîtrisés" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <DollarSign className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Salaires trop élevés pour des postes non essentiels</p>
            <p className="text-sm text-muted-foreground">→ charges fixes gonflées</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Absence de contrôle sur les heures supplémentaires</p>
            <p className="text-sm text-muted-foreground">→ dépenses imprévues</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <TrendingUp className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Mauvaise structuration des primes et avantages</p>
            <p className="text-sm text-muted-foreground">→ coûts non optimisés</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Users className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Turnover élevé</p>
            <p className="text-sm text-muted-foreground">→ coût du remplacement et formation des nouveaux collaborateurs</p>
          </div>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PersonnelCostRisk;
