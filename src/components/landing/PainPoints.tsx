import { TrendingUp, Users, Building2, Rocket, AlertTriangle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCounter } from '@/hooks/use-counter';

const PainPoints = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const urgencyContexts = [
    { icon: TrendingUp, title: 'Pic d\'activité saisonnier' },
    { icon: Rocket, title: 'Croissance rapide non anticipée' },
    { icon: Users, title: 'Turnover imprévu sur poste clé' },
    { icon: Building2, title: 'Création d\'entreprise ou nouvelle filiale' },
  ];

  const painPointStats = [
    { value: 80, label: 'CV à trier' },
    { value: 20, label: 'Entretiens à mener' },
    { value: 0, label: 'Profils adaptés' },
    { value: 2, suffix: '-4', label: 'Mois perdus' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Le Vrai Problème du Recrutement Urgent</h2>
          <p className="body-lg">
            Vous perdez du temps et de l'argent à chaque poste non pourvu
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPointStats.map((stat, index) => {
            const count = useCounter(stat.value, 2000, isVisible);
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-card card-hover"
              >
                <div className="text-4xl font-bold text-destructive mb-2">
                  {count}{stat.suffix || ''}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Urgency Contexts */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h3 className="heading-md text-center mb-8">
            Vous êtes concerné si vous vivez...
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgencyContexts.map((context, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-card card-hover"
              >
                <div className={`icon-wrapper mb-4 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                  <context.icon className="w-6 h-6" />
                </div>
                <p className="font-semibold text-foreground">{context.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-xl px-6 py-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
            <p className="text-lg font-semibold text-foreground">
              Un mauvais recrutement coûte plus cher que le recrutement lui-même
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
