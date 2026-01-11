import { Flame } from 'lucide-react';

const UrgencyBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 md:py-3 text-center fixed top-[60px] md:top-[72px] left-0 right-0 z-40">
      <div className="container-custom">
        <p className="flex items-center justify-center gap-2 text-xs md:text-base font-semibold">
          <Flame className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
          <span className="line-clamp-2 md:line-clamp-1">
            Offre Limitée : Les 10 premières entreprises reçoivent une vidéo exclusive sur les secrets du recrutement au Maroc
          </span>
          <Flame className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
        </p>
      </div>
    </div>
  );
};

export default UrgencyBanner;
