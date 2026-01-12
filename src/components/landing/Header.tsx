import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import logo2 from '@/assets/Logo2.png';
import UrgencyBanner from './UrgencyBanner';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <Button variant="cta" size="default" onClick={handleContactClick}>
            Recevoir des profils qualifiés
          </Button>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden">
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
