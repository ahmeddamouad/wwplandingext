import ZigzagSection from './ZigzagSection';
import { Check, X } from 'lucide-react';
import sectionImage from '@/assets/section-differentiation.jpg';

const Differentiation = () => {
  return (
    <ZigzagSection
      title="Comment nous vous trouvons le meilleur employé"
      reverse={false}
      bgColor="secondary"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Équipe de recrutement professionnelle" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
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
