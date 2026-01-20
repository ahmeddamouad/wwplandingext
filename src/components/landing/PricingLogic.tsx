import ZigzagSection from './ZigzagSection';
import { Wallet, CheckCircle, Clock } from 'lucide-react';
import sectionImage from '@/assets/section-pricing.jpg';

const PricingLogic = () => {
  const benefits = [
    {
      icon: Wallet,
      title: 'Prix standard pour tous les besoins de recrutement',
      description: 'Pas de frais cachés',
    },
    {
      icon: CheckCircle,
      title: 'Expertise incluse',
      description: 'Assure votre retour sur investissement',
    },
    {
      icon: Clock,
      title: '2 semaines pour livrer',
      description: 'Vous évitez de perdre du temps et surtout 3 mois de salaire sur le mauvais profil',
    },
  ];

  return (
    <ZigzagSection
      title="Probablement le meilleur rapport qualité prix du marché"
      subtitle="La relation avec nos clients dure en moyenne 2-3 ans, tout simplement grâce à une offre juste et à fort impact."
      reverse={true}
      bgColor="background"
      illustration={
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={sectionImage} 
            alt="Partenariat d'affaires" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      }
    >
      <div className="space-y-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ZigzagSection>
  );
};

export default PricingLogic;
