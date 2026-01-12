import { Award, TrendingUp, Medal, Briefcase } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: 'Certifié ISO 9001',
      description: 'Qualité garantie',
    },
    {
      icon: TrendingUp,
      title: '+200 recrutements',
      description: 'Réussis en 2025',
    },
    {
      icon: Medal,
      title: 'Top 3 cabinets',
      description: 'De recrutement au Maroc',
    },
    {
      icon: Briefcase,
      title: 'Partenaire privilégié',
      description: 'Des grands groupes',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
