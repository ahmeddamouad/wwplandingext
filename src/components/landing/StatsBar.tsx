import { useEffect, useState, useRef } from 'react';

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: '200+', label: 'Recrutements / an' },
    { value: '48h', label: 'Délai pour la première shortlist' },
    { value: '95%', label: 'Taux de satisfaction clients' },
    { value: '3 mois', label: 'Période de garantie' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                isVisible ? 'animate-count-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-stats-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
