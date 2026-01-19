import ZigzagSection from './ZigzagSection';
import SectionIllustration from './SectionIllustration';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const PainPoints = () => {
  return (
    <ZigzagSection
      title="Pourquoi il faut éviter un mauvais recrutement"
      subtitle="Un mauvais recrutement coûte plus cher que le recrutement lui-même."
      reverse={true}
      bgColor="background"
      illustration={
        <SectionIllustration variant="primary">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-destructive/10 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">80</div>
                <p className="text-sm text-muted-foreground">CV</p>
              </div>
              <div className="text-2xl font-bold text-primary">→</div>
              <div className="bg-destructive/10 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">20</div>
                <p className="text-sm text-muted-foreground">Entretiens</p>
              </div>
              <div className="text-2xl font-bold text-primary">→</div>
              <div className="bg-destructive/10 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">0</div>
                <p className="text-sm text-muted-foreground">Bon profil</p>
              </div>
            </div>
          </div>
        </SectionIllustration>
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
