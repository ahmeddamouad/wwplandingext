import { Star } from 'lucide-react';

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
              className="group relative bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-8 border border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Futuristic corner accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
              
              {/* Star rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
