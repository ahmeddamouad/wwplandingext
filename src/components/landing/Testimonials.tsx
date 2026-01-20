import ZigzagSection from './ZigzagSection';
import { Briefcase, ShoppingCart, Factory, Users } from 'lucide-react';
import sectionImage from '@/assets/section-testimonials.jpg';

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
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Équipe professionnelle célébrant le succès" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
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
