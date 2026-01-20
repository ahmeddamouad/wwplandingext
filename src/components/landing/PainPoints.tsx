import ZigzagSection from './ZigzagSection';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import sectionImage from '@/assets/section-painpoints.jpg';

const PainPoints = () => {
  return (
    <ZigzagSection
      title="Pourquoi il faut éviter un mauvais recrutement"
      subtitle="Un mauvais recrutement coûte plus cher que le recrutement lui-même."
      reverse={true}
      bgColor="background"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Frustration liée au mauvais recrutement" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Perte de temps</p>
            <p className="text-sm text-muted-foreground">80 CV → 20 entretiens → 0 bon profil</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
          <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Perte en productivité</p>
            <p className="text-sm text-muted-foreground">Mauvaise adéquation poste / profil</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Perte financière grave</p>
            <p className="text-sm text-muted-foreground">2 à 4 mois de salaire perdus</p>
          </div>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PainPoints;
