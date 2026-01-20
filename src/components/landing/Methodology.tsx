import ZigzagSection from './ZigzagSection';
import { Shield, TrendingUp, Award, FileCheck } from 'lucide-react';
import sectionImage from '@/assets/section-methodology.jpg';

const Methodology = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantie de remplacement 3 mois',
    },
    {
      icon: TrendingUp,
      title: 'Taux de réussite élevé',
    },
    {
      icon: Award,
      title: 'Références sectorielles',
    },
    {
      icon: FileCheck,
      title: 'Processus transparent',
    },
  ];

  return (
    <ZigzagSection
      id="garantie"
      title="Un recrutement sans risque, c'est possible"
      subtitle="Afin de garantir la sérénité de votre esprit, nous vous offrons :"
      reverse={true}
      bgColor="background"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Partenariat de confiance" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        {guarantees.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-foreground">{item.title}</p>
          </div>
        ))}
      </div>
    </ZigzagSection>
  );
};

export default Methodology;
