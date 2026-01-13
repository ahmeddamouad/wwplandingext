import { Shield, TrendingUp, Award, FileCheck } from 'lucide-react';

const Methodology = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantie de remplacement 3 mois',
      description: 'Si le candidat ne convient pas, nous le remplaçons gratuitement',
    },
    {
      icon: TrendingUp,
      title: 'Taux de réussite élevé',
      description: '95% de nos recrutements dépassent la période d\'essai avec succès',
    },
    {
      icon: Award,
      title: 'Références sectorielles',
      description: 'Plus de 200 recrutements réussis dans divers secteurs au Maroc',
    },
    {
      icon: FileCheck,
      title: 'Processus transparent',
      description: 'Suivi en temps réel et communication à chaque étape du recrutement',
    },
  ];

  return (
    <section id="garantie" className="section-padding bg-secondary w-full">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Garantie & Réassurance + Processus</h2>
          <p className="body-lg text-muted-foreground">
            Lever le frein principal : votre sécurité est notre priorité
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 border-2 border-primary/20 shadow-card card-hover group"
            >
              <div className={`icon-wrapper mb-4 bg-primary/10 group-hover:scale-110 transition-transform ${
                index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
              }`}>
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
