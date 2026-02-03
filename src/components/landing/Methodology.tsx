import ZigzagSection from './ZigzagSection';
import { Shield, TrendingUp, Award, FileCheck, Users, Clock } from 'lucide-react';
import sectionImage from '@/assets/Methodology.jpg';

const Methodology = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Audit complet des coûts salariaux et heures utilisées',
    },
    {
      icon: TrendingUp,
      title: 'Externalisation ou conseil stratégique sur la masse salariale',
    },
    {
      icon: Award,
      title: 'Calcul et édition des bulletins de paie',
    },
    {
      icon: FileCheck,
      title: 'Déclarations sociales et fiscales',
    },
    {
      icon: Clock,
      title: 'Suivi des congés, absences et heures supplémentaires',
    },
    {
      icon: Users,
      title: 'Veille légale et conformité permanente',
    },
  ];

  return (
    <ZigzagSection
      id="garantie"
      title="Comment nous vous aidons à maîtriser vos coûts"
      reverse={true}
      bgColor="linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F1F3 100%)"
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
            className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20 justify-center lg:justify-start"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-left">{item.title}</p>
          </div>
        ))}
      </div>
    </ZigzagSection>
  );
};

export default Methodology;
