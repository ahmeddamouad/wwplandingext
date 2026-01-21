import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { trackLead } from '@/lib/metaPixel';
import { Shield } from 'lucide-react';

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

const ContactFormSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        timestamp: new Date().toISOString()
      };

      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Track lead conversion with Meta Pixel
      trackLead();

      // Redirect to thank you page
      navigate('/merci');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur s\'est produite. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-secondary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Nom complet<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Adresse e-mail<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Entreprise
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Téléphone<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+212 600 000 000"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Décrivez votre besoin en recrutement<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Recherche d'un responsable commercial pour la région de Casablanca..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Recevoir des profils disponibles'}
              </Button>
            </form>

            {/* Guarantee Box */}
            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Garantie 100% Satisfait</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">
                    Remplacement gratuit sous 3 mois si le candidat ne convient pas
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges - Sliding Logos */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-secondary/10">
              <p className="text-xs text-muted-foreground text-center mb-3 sm:mb-4">Ils nous font confiance</p>
              <div className="relative overflow-hidden">
                <div className="flex gap-6 sm:gap-8 animate-scroll-logos hover:[animation-play-state:paused]">
                  {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9].map((logo, index) => (
                    <img 
                      key={index}
                      src={logo} 
                      alt="Company logo" 
                      className="h-6 sm:h-8 w-16 sm:w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
