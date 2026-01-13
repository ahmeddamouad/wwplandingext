import { TrendingUp, Users, Building2, Rocket, AlertTriangle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCounter } from '@/hooks/use-counter';

const PainPoints = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const urgencyContexts = [
    { icon: TrendingUp, title: 'Pic d\'activité' },
    { icon: Rocket, title: 'Croissance rapide' },
    { icon: Users, title: 'Turnover imprévu' },
    { icon: Building2, title: 'Création d\'entreprise' },
  ];

  const painPointStats = [
    { value: 80, label: 'CV' },
    { value: 20, label: 'Entretiens' },
    { value: 0, label: 'Bon profil' },
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
    <section className="section-padding bg-background w-full" ref={sectionRef}>
      <div className="container-custom w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Le Vrai Problème du Recrutement + Contexte d'urgence</h2>
          <p className="body-lg text-muted-foreground mb-4">
            Alignement émotionnel + rationnel
          </p>
        </div>

        {/* Ce que vivent les entreprises */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ce que vivent les entreprises :
          </h3>
          
          {/* Pain Points with arrows */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 px-2">
            {painPointStats.map((stat, index) => {
              const count = useCounter(stat.value, 2000, isVisible);
              return (
                <div key={index} className="flex items-center gap-2 sm:gap-4">
                  <div className="bg-card rounded-xl p-4 sm:p-6 border-2 border-destructive/30 shadow-lg min-w-[100px] sm:min-w-[140px] text-center">
                    <div className="text-4xl font-bold text-destructive mb-2">
                      {count}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  </div>
                  {index < painPointStats.length - 1 && (
                    <div className="text-4xl font-bold text-primary hidden sm:block">→</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional pain points */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-card rounded-xl p-6 border border-destructive/20 shadow-card">
              <p className="text-lg font-semibold text-foreground flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                Mauvaise adéquation poste / profil
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-destructive/20 shadow-card">
              <p className="text-lg font-semibold text-foreground flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                2 à 4 mois de salaire perdus
              </p>
            </div>
          </div>
        </div>

        {/* Urgency Contexts */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Contextes d'urgence :
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
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-destructive/10 border-2 border-destructive/30 rounded-xl px-8 py-5 shadow-lg">
            <AlertTriangle className="w-7 h-7 text-destructive flex-shrink-0" />
            <p className="text-xl font-bold text-foreground">
              Un mauvais recrutement coûte <span className="text-destructive">plus cher</span> que le recrutement lui-même
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
