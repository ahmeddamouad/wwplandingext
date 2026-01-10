import { useEffect, useState, useRef } from 'react';
import { useCounter } from '@/hooks/use-counter';

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 200, suffix: '+', label: 'Recrutements / an' },
    { value: 48, suffix: 'h', label: 'Délai pour la première shortlist' },
    { value: 95, suffix: '%', label: 'Taux de satisfaction clients' },
    { value: 3, suffix: ' mois', label: 'Période de garantie' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="garantie"
      ref={sectionRef}
      className="py-16 bg-stats text-stats-foreground"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, 2000, isVisible);
            
            return (
              <div
                key={index}
                className={`text-center ${
                  isVisible ? 'animate-count-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {count}{stat.suffix}
                </div>
                <p className="text-sm md:text-base text-stats-foreground/80">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
