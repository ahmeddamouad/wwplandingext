import ZigzagSection from './ZigzagSection';
import SectionIllustration from './SectionIllustration';
import { Shield, TrendingUp, Award, FileCheck } from 'lucide-react';

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
        <SectionIllustration variant="primary">
          <div className="grid grid-cols-2 gap-4">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="bg-primary/10 rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </SectionIllustration>
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
