// Import company logos
import logo1 from '@/assets/image.png';
import logo2 from '@/assets/image copy.png';
import logo3 from '@/assets/image copy 2.png';
import logo4 from '@/assets/image copy 3.png';
import logo5 from '@/assets/image copy 4.png';
import logo6 from '@/assets/image copy 5.png';
import logo7 from '@/assets/image copy 6.png';
import logo8 from '@/assets/image copy 7.png';
import logo9 from '@/assets/image copy 8.png';

const TrustedCompanies = () => {
  return (
    <section className="py-8 sm:py-12 bg-background border-y border-secondary/10">
      <div className="container-custom">
        <div className="relative overflow-hidden">
          <div className="flex gap-8 sm:gap-12 animate-scroll-logos hover:[animation-play-state:paused]">
            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9].map((logo, index) => (
              <img 
                key={index}
                src={logo} 
                alt="Company logo" 
                className="h-12 sm:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
