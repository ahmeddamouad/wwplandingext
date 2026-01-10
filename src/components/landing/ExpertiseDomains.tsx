import { Briefcase, Users, Target, Code, FileSpreadsheet, Globe } from 'lucide-react';

const ExpertiseDomains = () => {
  const domains = [
    {
      icon: Briefcase,
      title: 'Recrutement Cadres & Managers',
      description: 'Middle et top management, experts et dirigeants',
    },
    {
      icon: Users,
      title: 'Recrutement Massif',
      description: 'Campagnes à grande échelle : forces de vente, centres de contact, production',
    },
    {
      icon: Target,
      title: 'Chasse de Têtes',
      description: 'Approche directe, confidentielle et ciblée des profils rares ou stratégiques',
    },
    {
      icon: Code,
      title: 'Recrutement IT & Digital',
      description: 'Développeurs, DevOps, Data Engineers, Product Owners, CTO, CSM...',
    },
    {
      icon: FileSpreadsheet,
      title: 'Recrutement Back & Front Office',
      description: 'Comptabilité, finance, RH, relation client, administration',
    },
    {
      icon: Globe,
      title: 'Recrutement BPO & Offshore',
      description: 'Support multilingue, centres de services, équipes nearshore au Maroc',
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Domaines d'expertise – Nos Spécialités au Maroc
          </h2>
          <p className="body-lg">
            Une expertise sectorielle reconnue pour des recrutements ciblés et efficaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-card card-hover group"
            >
              <div className="icon-wrapper mb-4 group-hover:scale-110 transition-transform">
                <domain.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{domain.title}</h3>
              <p className="text-muted-foreground">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseDomains;
