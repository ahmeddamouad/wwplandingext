import { useState, useEffect } from 'react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(true); // Show CTA by default (at hero)

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check if user is in the form section only (not footer)
      const formSection = document.getElementById('contact-form');
      const footer = document.querySelector('footer');
      
      if (formSection && footer) {
        const formRect = formSection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide CTA only when in form section but before footer
        const inFormSection = formRect.top < windowHeight * 0.5 && formRect.bottom > windowHeight * 0.3;
        const inFooter = footerRect.top < windowHeight;
        
        setShowCTA(!inFormSection || inFooter);
      }
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
            : 'bg-background py-3'
        }`}
      >
      <div className="container-custom relative flex items-center justify-between">
        {/* Logo - left aligned when CTA shows, centered when CTA is hidden */}
        <div className={`flex items-center transition-all duration-300 ${
          showCTA ? '' : 'flex-1 justify-center'
        }`}>
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="World Wide Progress" 
              className="h-10 md:h-12 w-auto"
              style={{ 
                imageRendering: 'auto',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'auto'
              }}
            />
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className={`hidden lg:flex items-center transition-opacity duration-300 ${
          showCTA ? 'opacity-100' : 'opacity-0 pointer-events-none absolute right-0'
        }`}>
          <ShimmerButton 
            onClick={scrollToForm}
            background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
            shimmerColor="#ffffff"
            className="text-base font-semibold"
          >
            Recevoir des profils qualifiés
          </ShimmerButton>
        </div>

        {/* Mobile CTA Button */}
        <div className={`lg:hidden transition-opacity duration-300 ${
          showCTA ? 'opacity-100' : 'opacity-0 pointer-events-none absolute right-0'
        }`}>
          <ShimmerButton 
            onClick={scrollToForm}
            background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
            shimmerColor="#ffffff"
            className="text-sm font-semibold px-4 py-2"
          >
            Recevoir des profils qualifiés
          </ShimmerButton>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
