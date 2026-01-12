import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Clock, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-recruitment.jpg';

const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
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

  const handleNewMessage = () => {
    setIsSubmitted(false);
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
    <section id="contact-form" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-primary/5 pt-40 md:pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Cabinet de Recrutement au Maroc
            </div>

            <h1 className="heading-xl">
              Recruter vite sans se tromper{' '}
              <span className="text-primary">coûte moins cher</span> que recruter deux fois
            </h1>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
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
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in delay-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Garantie 100% Satisfait</h3>
                  <p className="text-sm text-muted-foreground">
                    Remplacement gratuit sous 3 mois si le candidat ne convient pas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative animate-fade-in delay-200">
            {!isSubmitted ? (
              <div className="relative bg-gradient-to-br from-white via-white to-primary/5 rounded-3xl shadow-2xl p-8 border border-primary/20 backdrop-blur-sm sticky top-32 overflow-hidden">
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

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
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
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="relative bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-10 text-center border border-primary/20 backdrop-blur-sm overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-muted-foreground">
                    Notre équipe vous répondra rapidement avec des profils adaptés.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
