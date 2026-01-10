import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import logo2 from '@/assets/Logo2.png';
import { useContactForm } from '@/contexts/ContactFormContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContactForm } = useContactForm();

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
    openContactForm();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
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
          <Button variant="hero" size="default" onClick={handleContactClick}>
            Nous contacter
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4" onClick={handleContactClick}>
              Nous contacter
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
