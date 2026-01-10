import { TrendingDown, Clock, Shield, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const PricingLogic = () => {
  const { openContactForm } = useContactForm();

  const benefits = [
    {
      icon: Wallet,
      title: 'Honoraires standards du marché',
      description: '13% du salaire annuel brut',
    },
    {
      icon: Clock,
      title: 'Gain de temps considérable',
      description: '2-4 semaines vs 2-4 mois',
    },
    {
      icon: Shield,
      title: 'Sécurité via garantie',
      description: '3 mois de remplacement inclus',
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Investissement & Logique Économique</h2>
          <p className="body-lg">
            Comprendre pourquoi investir dans un bon recrutement est rentable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cost Breakdown */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-8 h-8 text-destructive" />
              <h3 className="heading-md">Le coût d'un mauvais recrutement</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Salaire perdu</span>
                <span className="font-bold text-destructive">4 mois</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Perte de productivité</span>
                <span className="font-bold text-destructive">Élevée</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Coût d'opportunité</span>
                <span className="font-bold text-destructive">Significatif</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-bold text-foreground">Impact total</span>
                <span className="font-bold text-destructive text-xl">Considérable</span>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="space-y-6">
            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8">
              <h3 className="heading-md text-primary mb-4">Notre promesse</h3>
              <p className="body-md text-foreground mb-6">
                Investir dans le bon recrutement dès le départ = Économiser des mois de
                salaire et préserver la performance de vos équipes
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  <div className="icon-wrapper flex-shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full" onClick={openContactForm}>
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
