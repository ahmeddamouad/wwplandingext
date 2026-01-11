import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-recruitment.jpg';
import { useContactForm } from '@/contexts/ContactFormContext';

const Hero = () => {
  const { openContactForm } = useContactForm();

  const benefits = [
    {
      icon: Clock,
      text: 'Délais réduits (2 à 4 semaines au lieu de 2-4 mois)',
    },
    {
      icon: Users,
      text: 'Candidats actifs en recherche, pas des CV recyclés',
    },
    {
      icon: Shield,
      text: 'Garantie de remplacement 3 mois incluse',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-background pt-40 md:pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Cabinet de Recrutement au Maroc
            </div>

            <h1 className="heading-xl">
              Recruter vite sans se tromper{' '}
              <span className="text-primary">coûte moins cher</span> que recruter deux fois
            </h1>

            <p className="body-lg max-w-xl">
              Des profils qualifiés, disponibles immédiatement, avec garantie de
              remplacement 3 mois. Recrutement sur mesure & chasse de têtes au Maroc.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className={`icon-wrapper flex-shrink-0 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                  }`}>
                    <benefit.icon className="w-5 h-5" />
                  </span>
                  <span className="body-md text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={openContactForm}>
                Obtenir Ma Vidéo Gratuite
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Guarantee Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in delay-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Garantie 100% Satisfait</h3>
                  <p className="text-sm text-muted-foreground">
                    Remplacement gratuit sous 3 mois si le candidat ne convient pas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Consultation en recrutement professionnel - World Wide Progress"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 border border-border animate-scale-in delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Clients fidèles</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-scale-in delay-400">
              <span className="font-bold">200+</span>
              <span className="text-sm ml-1">recrutements/an</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
