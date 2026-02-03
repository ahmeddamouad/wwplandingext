import ZigzagSection from './ZigzagSection';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import sectionImage from '@/assets/section-painpoints.jpg';

const PainPoints = () => {
  return (
    <ZigzagSection
      title="La paie n'est pas administrative. Elle est critique"
      subtitle="Une simple erreur de paie peut déclencher des :"
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Risques liés aux erreurs de paie" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Pénalités fiscales immédiates</p>
            <p className="text-sm text-muted-foreground">5 % à 20 % + intérêts cumulés</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Redressements qui grossissent avec le temps</p>
            <p className="text-sm text-muted-foreground">Les erreurs non corrigées s'accumulent</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Amendes par salarié</p>
            <p className="text-sm text-muted-foreground">Pouvant atteindre 20 000 MAD</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <Clock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Pénalités CNSS automatiques</p>
            <p className="text-sm text-muted-foreground">3 % puis 1 % par mois</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20 justify-center lg:justify-start">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Sanctions lourdes avec responsabilité du dirigeant</p>
          </div>
        </div>
        <div className="space-y-4">
           {/* ...existing 5 pain point cards... */}
           <div className="mt-6 p-4 bg-destructive/10 rounded-xl border-2 border-destructive/30 text-center">
             <p className="text-lg font-bold text-destructive">
               Le risque est financier, juridique… et personnel.
             </p>
           </div>
        </div>
      </div>
    </ZigzagSection>
  );
};

export default PainPoints;
