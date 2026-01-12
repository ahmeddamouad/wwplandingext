import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactFormSection = () => {
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

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="heading-xl text-secondary mb-4">
                  Recevoir des profils disponibles immédiatement
                </h2>
                <p className="body-lg text-secondary/70">
                  Sans engagement – réponse rapide
                </p>
              </div>

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
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-primary/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="heading-lg text-secondary mb-4">
                Message envoyé avec succès !
              </h3>
              <p className="body-lg text-secondary/70 mb-8">
                Notre équipe vous répondra dans les plus brefs délais avec des profils adaptés à vos besoins.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={handleNewMessage}
                className="mx-auto"
              >
                Envoyer un autre message
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
