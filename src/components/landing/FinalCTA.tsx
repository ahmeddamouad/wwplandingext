import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Linkedin, Play, CheckCircle } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const FinalCTA = () => {
  const { openContactForm } = useContactForm();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Besoin de Recruter Rapidement au Maroc?
          </h2>
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            Construisons ensemble une stratégie de recrutement efficace, adaptée au
            marché marocain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" onClick={openContactForm}>
              Obtenir Ma Vidéo Gratuite
              <Play className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-12">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Réponse sous 2h ouvrées
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Vidéo exclusive offerte (valeur 5000 DH)
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
            <a
              href="mailto:contact@wwpagency.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@wwpagency.com
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              Casablanca | Rabat, Maroc
            </div>
            <a
              href="https://www.linkedin.com/company/world-wide-progress"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connectez-vous avec nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
