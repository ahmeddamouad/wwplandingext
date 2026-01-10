import { X, Check } from 'lucide-react';

const Differentiation = () => {
  const dontSell = [
    'Des packs de CV génériques',
    'Des profils recyclés de bases de données',
    'Des solutions standardisées',
  ];

  const deliver = [
    'Des candidats en veille active ou recherche ciblée',
    'Des profils évalués humainement et professionnellement',
    'Des solutions adaptées à votre secteur et culture d\'entreprise',
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Notre Approche de Recrutement</h2>
          <p className="body-lg">
            Ce qui fait la différence entre un recrutement réussi et un échec coûteux
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What we DON'T sell */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="heading-md mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              Nous ne vendons PAS
            </h3>
            <ul className="space-y-4">
              {dontSell.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we DELIVER */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
            <h3 className="heading-md mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </span>
              Nous livrons
            </h3>
            <ul className="space-y-4">
              {deliver.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
