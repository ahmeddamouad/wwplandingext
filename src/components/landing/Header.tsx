import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import logo2 from '@/assets/Logo2.png';
import UrgencyBanner from './UrgencyBanner';

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
    { href: '#expertise', label: 'Expertise' },
    { href: '#faq', label: 'FAQ' },
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
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center relative">
          <img 
            src={logo} 
            alt="World Wide Progress" 
            className={`h-10 md:h-12 transition-opacity duration-300 ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img 
            src={logo2} 
            alt="World Wide Progress" 
            className={`h-10 md:h-12 absolute left-0 top-0 transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/world-wide-progress"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className={`transition-opacity duration-300 ${
            showDesktopCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Button variant="cta" size="default" onClick={handleContactClick}>
              Recevoir des profils qualifiés
            </Button>
          </div>
        </div>

        {/* Mobile CTA Button - Only show after scrolling past form */}
        <div className={`lg:hidden transition-opacity duration-300 ${
          showMobileCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <Button variant="cta" size="sm" onClick={handleContactClick}>
            Recevoir des profils qualifiés
          </Button>
        </div>
      </div>


    </header>
    <UrgencyBanner />
    </>
  );
};

export default Header;
