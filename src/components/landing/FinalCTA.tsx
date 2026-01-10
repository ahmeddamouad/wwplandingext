import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Linkedin } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-background">
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
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:contact@wwpagency.com">
                Recevoir des profils qualifiés immédiatement
                <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-12">
            Sans engagement – Réponse rapide – Premier échange gratuit
          </p>

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
