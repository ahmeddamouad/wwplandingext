import { Target, Search, Users, FileText, ShieldCheck } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      number: '1',
      icon: Target,
      title: 'Analyse du besoin',
      description: 'Compréhension approfondie de votre contexte, culture et exigences du poste',
    },
    {
      number: '2',
      icon: Search,
      title: 'Sourcing & chasse',
      description: 'Approches multicanales: job boards, réseaux, base interne, chasse directe',
    },
    {
      number: '3',
      icon: Users,
      title: 'Shortlist & entretiens',
      description: 'Entretiens structurés, tests et vérification des références',
    },
    {
      number: '4',
      icon: FileText,
      title: 'Sélection & proposition',
      description: 'Présentation des meilleurs profils et facilitation de la décision',
    },
    {
      number: '5',
      icon: ShieldCheck,
      title: 'Onboarding & suivi',
      description: 'Accompagnement à l\'intégration et garantie de satisfaction',
    },
  ];

  return (
    <section id="methodologie" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Notre Méthodologie de Recrutement</h2>
          <p className="body-lg">
            Un processus éprouvé pour garantir des recrutements réussis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 border border-border shadow-card card-hover group"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10" />
              )}

              <div className="icon-wrapper mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6" />
              </div>

              <div className="mb-2">
                <span className="text-sm font-bold text-primary">{step.number}.</span>
                <h3 className="font-bold text-foreground mt-1">{step.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
