import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import logo2 from '@/assets/Logo2.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [showDesktopCTA, setShowDesktopCTA] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Get hero section height
      const heroSection = document.getElementById('contact-form');
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      
      // Show CTA button on mobile when scrolling past form (200px)
      if (window.innerWidth < 1024) {
        setShowMobileCTA(window.scrollY > 200);
      } else {
        setShowMobileCTA(false);
      }
      
      // Show CTA button on desktop when scrolling past hero section
      setShowDesktopCTA(window.scrollY > heroHeight - 100);
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#methodologie', label: 'Méthodologie' },
    { href: '#garantie', label: 'Garantie' },
  ];

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    scrollToForm();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
            : 'bg-background py-3'
        }`}
      >
      <div className="container-custom relative flex items-center justify-center">
        {/* Logo 1 - always centered */}
        <a href="#" className={`flex items-center relative transition-opacity duration-300 ${
          showDesktopCTA || showMobileCTA ? 'opacity-0' : 'opacity-100'
        }`}>
          <img 
            src={logo} 
            alt="World Wide Progress" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Logo 2 - appears on the left when CTA shows */}
        <a href="#" className={`absolute left-0 flex items-center transition-opacity duration-300 ${
          showDesktopCTA || showMobileCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <img 
            src={logo} 
            alt="World Wide Progress" 
            className="h-10 md:h-12"
          />
        </a>

        <div className={`hidden lg:flex items-center absolute right-0 transition-opacity duration-300 ${
          showDesktopCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <Button variant="cta" size="default" onClick={handleContactClick}>
            Recevoir des profils qualifiés
          </Button>
        </div>

        {/* Mobile CTA Button - Only show after scrolling past form */}
        <div className={`lg:hidden absolute right-0 transition-opacity duration-300 ${
          showMobileCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <Button variant="cta" size="sm" onClick={handleContactClick}>
            Recevoir des profils qualifiés
          </Button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
