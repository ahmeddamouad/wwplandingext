import ZigzagSection from './ZigzagSection';
import SectionIllustration from './SectionIllustration';
import { Check, X, Users, Target } from 'lucide-react';

const Differentiation = () => {
  return (
    <ZigzagSection
      title="Comment nous vous trouvons le meilleur employé"
      reverse={false}
      bgColor="secondary"
      illustration={
        <SectionIllustration variant="primary">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">+</div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Évaluation humaine + Expertise sectorielle
            </p>
          </div>
        </SectionIllustration>
      }
    >
      <div className="space-y-6">
        {/* What we deliver */}
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            Nous livrons rapidement :
          </h3>
          <ul className="space-y-2 ml-7">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              Des candidats en veille ou en recherche active (Ils sont prêts à travailler pour vous)
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              Évalués humainement et professionnellement
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              Adaptés à votre secteur d'activité
            </li>
          </ul>
        </div>

        {/* What we don't sell */}
        <div className="bg-destructive/5 rounded-xl p-5 border border-destructive/20">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" />
            Nous ne proposons jamais :
          </h3>
          <ul className="space-y-2 ml-7">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
              Des packs de CV non filtrés
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
              Des profils génériques sans valeur ajoutée
            </li>
          </ul>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default Differentiation;
