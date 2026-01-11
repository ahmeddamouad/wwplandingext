import { Flame } from 'lucide-react';

const UrgencyBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 text-center fixed top-[72px] left-0 right-0 z-40">
      <div className="container-custom">
        <p className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
          <Flame className="w-5 h-5 animate-bounce" />
          <span>
            Offre Limitée : Les 10 premières entreprises reçoivent une vidéo exclusive sur les secrets du recrutement au Maroc
          </span>
          <Flame className="w-5 h-5 animate-bounce" />
        </p>
      </div>
    </div>
  );
};

export default UrgencyBanner;
