import { TrendingUp, Users, Building2, Rocket, AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const urgencyContexts = [
    { icon: TrendingUp, title: 'Pic d\'activité saisonnier' },
    { icon: Rocket, title: 'Croissance rapide non anticipée' },
    { icon: Users, title: 'Turnover imprévu sur poste clé' },
    { icon: Building2, title: 'Création d\'entreprise ou nouvelle filiale' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Le Vrai Problème du Recrutement Urgent</h2>
          <p className="body-lg">
            Vous perdez du temps et de l'argent à chaque poste non pourvu
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover">
            <div className="text-4xl font-bold text-destructive mb-2">80</div>
            <p className="text-muted-foreground">CV à trier</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover">
            <div className="text-4xl font-bold text-destructive mb-2">20</div>
            <p className="text-muted-foreground">Entretiens à mener</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover">
            <div className="text-4xl font-bold text-destructive mb-2">0</div>
            <p className="text-muted-foreground">Profils adaptés</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-card card-hover">
            <div className="text-4xl font-bold text-destructive mb-2">2-4</div>
            <p className="text-muted-foreground">Mois perdus</p>
          </div>
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
                <div className="icon-wrapper mb-4">
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
