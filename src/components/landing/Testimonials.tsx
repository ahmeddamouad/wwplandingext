import ZigzagSection from './ZigzagSection';
import SectionIllustration from './SectionIllustration';
import { Briefcase, ShoppingCart, Factory, Users } from 'lucide-react';

const Testimonials = () => {
  const results = [
    {
      icon: Briefcase,
      title: 'Postes clés',
      description: 'DAF, DRH, CEO… nous avons recruté des profils exceptionnels pour les grandes et moyennes entreprises.',
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Nous avons accompagné notre client dans le recrutement de plus de 100 salariés.',
    },
    {
      icon: Users,
      title: 'E-commerce',
      description: 'Nous avons recruté plus de 80 salariés avec un turnover très faible.',
    },
    {
      icon: Factory,
      title: 'Industrie & clients internationaux',
      description: 'Expertise reconnue dans le secteur industriel et auprès de clients internationaux.',
    },
  ];

  return (
    <ZigzagSection
      title="Nos résultats : preuves de notre expertise"
      reverse={false}
      bgColor="secondary"
      illustration={
        <SectionIllustration variant="primary">
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-primary">200+</div>
            <p className="text-muted-foreground">Recrutements réussis</p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <p className="text-xs text-muted-foreground">Retail</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">80+</div>
                <p className="text-xs text-muted-foreground">E-commerce</p>
              </div>
            </div>
          </div>
        </SectionIllustration>
      }
    >
      <div className="space-y-4">
        {results.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-card rounded-xl border border-primary/20 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ZigzagSection>
  );
};

export default Testimonials;
