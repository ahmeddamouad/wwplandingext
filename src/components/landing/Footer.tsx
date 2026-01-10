import { Linkedin, Facebook, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const services = [
    'Recrutement & Chasse de Têtes',
    'Accompagnement Investisseurs',
    'Conseil RH Stratégique',
    'Externalisation RH',
    'Formation & Développement',
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Méthodologie', href: '#methodologie' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img src={logo} alt="World Wide Progress" className="h-12 brightness-0 invert" />
            <p className="text-sm leading-relaxed">
              Votre partenaire RH d'excellence pour transformer vos défis en opportunités de croissance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/world-wide-progress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm hover:text-background transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Casablanca, Maroc<br />
                  Rabat, Maroc
                </span>
              </li>
              <li>
                <a
                  href="mailto:contact@wwpagency.com"
                  className="flex items-center gap-3 text-sm hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@wwpagency.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/world-wide-progress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-background transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connectez-vous avec nous
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} World Wide Progress. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
