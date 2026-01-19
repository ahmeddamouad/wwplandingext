import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Clock, Users, Shield } from 'lucide-react';
import { trackLead } from '@/lib/metaPixel';

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

const Hero = () => {
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

  const benefits = [
    {
      icon: Clock,
      text: 'Délais réduits (2 à 4 semaines au lieu de 2-4 mois)',
    },
    {
      icon: Users,
      text: 'Candidats actifs en recherche, pas des CV recyclés',
    },
    {
      icon: Shield,
      text: 'Garantie de remplacement 3 mois incluse',
    },
  ];

  return (
    <section id="contact-form" className="relative lg:min-h-screen flex items-start lg:items-center bg-gradient-to-br from-secondary via-background to-primary/5 pt-20 md:pt-32 pb-12 md:pb-16 w-full overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up w-full max-w-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full text-primary font-medium text-xs sm:text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Cabinet de Recrutement au Maroc
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground break-words">
              Recruter vite sans se tromper{' '}
              <span className="text-primary">coûte moins cher</span> que recruter deux fois
            </h1>

            <ul className="space-y-3 sm:space-y-4 w-full max-w-full">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 animate-fade-in w-full"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className={`icon-wrapper flex-shrink-0 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                  }`}>
                    <benefit.icon className="w-5 h-5" />
                  </span>
                  <span className="body-md text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 animate-fade-in delay-300 w-full max-w-full">
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
          </div>

          {/* Right Form */}
          <div className="relative animate-fade-in delay-200 order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-white via-white to-primary/5 rounded-3xl shadow-2xl p-8 border border-primary/20 backdrop-blur-sm lg:sticky lg:top-32 overflow-hidden">
              {/* Futuristic decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-semibold text-sm">
                      Nom complet<span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold text-sm">
                      Adresse e-mail<span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 rounded-xl h-12"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-semibold text-sm">
                        Entreprise
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Votre entreprise"
                        className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-semibold text-sm">
                        Téléphone<span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+212 600 000 000"
                        className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold text-sm">
                      Décrivez votre besoin<span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Recherche d'un responsable commercial..."
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 rounded-xl min-h-[110px] resize-none"
                    />
                  </div>

                  <ShimmerButton
                    type="submit"
                    disabled={isSubmitting}
                    background="linear-gradient(135deg, hsl(172, 70%, 39%) 0%, hsl(180, 60%, 45%) 100%)"
                    shimmerColor="#ffffff"
                    className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Recevoir des profils disponibles'
                    )}
                  </ShimmerButton>

                  {/* Trust Badges */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 pb-3">
                    <p className="text-xs text-muted-foreground text-center mb-3 sm:mb-4">Ils nous font confiance</p>
                    <div className="relative overflow-hidden max-w-[180px] sm:max-w-none mx-auto">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
