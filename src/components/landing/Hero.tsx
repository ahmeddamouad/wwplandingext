import { Clock, Users, Shield, ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import heroImage from '@/assets/section-hero.jpg';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    <section className="relative lg:min-h-screen flex items-start lg:items-center bg-gradient-to-br from-secondary via-background to-primary/5 pt-20 md:pt-32 pb-12 md:pb-16 w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up w-full max-w-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full text-primary font-medium text-xs sm:text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Cabinet de Recrutement au Maroc
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground break-words">
              Recruter vite sans se tromper{' '}
              <span className="text-primary">coûte moins cher</span> que recruter deux fois
            </h1>

            <ul className="space-y-3 sm:space-y-4 w-full max-w-full">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 animate-fade-in w-full"
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

            {/* Guarantee Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 animate-fade-in delay-300 w-full max-w-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Garantie 100% Satisfait</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">
                    Remplacement gratuit sous 3 mois si le candidat ne convient pas
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <ShimmerButton
              onClick={scrollToForm}
              background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
              shimmerColor="#ffffff"
              className="w-full sm:w-auto text-base font-semibold flex items-center justify-center gap-2"
            >
              Recevoir des profils disponibles
              <ArrowRight className="w-5 h-5" />
            </ShimmerButton>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in delay-200 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Recrutement professionnel" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
