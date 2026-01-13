import { TrendingDown, Clock, Shield, Wallet, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PricingLogic = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const benefits = [
    {
      icon: Wallet,
      title: 'Prix standard du marché (13 %)',
      description: 'Tarification transparente et compétitive',
    },
    {
      icon: CheckCircle,
      title: 'Expertise incluse',
      description: 'Accompagnement personnalisé à chaque étape',
    },
    {
      icon: Shield,
      title: 'Gain de temps + sécurité',
      description: 'Recrutement rapide avec garantie de remplacement',
    },
  ];

  return (
    <section className="section-padding bg-secondary w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground break-words">Investissement & Logique Économique</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground break-words">
            Désamorcer l'objection "c'est cher"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Cost Breakdown */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border-2 border-destructive/30 shadow-xl w-full max-w-full">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">Le coût d'un mauvais recrutement</h3>
            </div>
            
            <div className="bg-destructive/10 rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-destructive mb-2">
                  4 mois de salaire
                </div>
                <div className="text-lg font-semibold text-foreground">
                  + zéro valeur
                </div>
                <div className="text-lg font-semibold text-foreground">
                  + perte d'opportunité
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm font-medium text-muted-foreground">
                  Salaire versé sans retour sur investissement
                </p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm font-medium text-muted-foreground">
                  Temps d'équipe perdu en formation inutile
                </p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm font-medium text-muted-foreground">
                  Opportunités commerciales manquées
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="space-y-4 sm:space-y-6 w-full max-w-full">
            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 sm:p-8 shadow-lg w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 break-words">Notre solution économique</h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed break-words">
                Investir dans le <span className="font-bold text-primary">bon recrutement dès le départ</span> = 
                Économiser des mois de salaire et préserver la performance de vos équipes
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 border-2 border-primary/20 shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full" onClick={scrollToForm}>
              Recevoir des profils qualifiés
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingLogic;
