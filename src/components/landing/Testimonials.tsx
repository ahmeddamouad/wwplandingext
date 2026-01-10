import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Nous avions besoin d\'un Directeur Commercial expérimenté en moins de 3 semaines. World Wide Progress a identifié le candidat idéal en 10 jours. Il est toujours avec nous 18 mois plus tard.',
      author: 'Directrice RH',
      company: 'E-commerce (80 salariés)',
    },
    {
      quote:
        'Le recrutement de notre équipe IT était un vrai casse-tête. WWP a compris nos besoins techniques et culturels et nous a présenté 3 profils parfaitement alignés en 2 semaines.',
      author: 'CTO',
      company: 'Fintech Casablanca',
    },
    {
      quote:
        'La garantie de remplacement nous a convaincus. Professionnalisme, réactivité et suivi impeccable. Notre partenaire RH de confiance.',
      author: 'DG',
      company: 'Retail (100+ salariés)',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Ils Nous Font Confiance</h2>
          <p className="body-lg">
            Témoignages de nos clients satisfaits à travers le Maroc
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card card-hover relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <blockquote className="text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
