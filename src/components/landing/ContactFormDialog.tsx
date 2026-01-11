import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import videoFile from '@/assets/Recrutement_Réussi_au_Maroc.mp4';
import pdfFile from '@/assets/Checklist Recrutement WWP.pdf';

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
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

  const handleClose = () => {
    setIsSubmitted(false);
    onOpenChange(false);
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] bg-background max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">
                Envoyez-nous un Message
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et notre équipe vous répondra
                rapidement.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
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
              Votre message<span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Décrivez votre besoin en recrutement..."
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
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>
          </>
        ) : (
          <div className="py-4 sm:py-8 space-y-4 sm:space-y-6">
            <div className="space-y-1 sm:space-y-2 text-center px-2">
              <h3 className="text-lg sm:text-2xl font-bold text-foreground leading-tight">
                Voici Votre Vidéo Gratuite !
              </h3>
              <p className="text-xs sm:text-base text-muted-foreground">
                Découvrez comment réussir votre recrutement au Maroc
              </p>
            </div>
            
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-secondary/5">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={videoFile}
              >
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">🎁 Bonus : Téléchargez votre checklist gratuite</p>
              <Button
                variant="outline"
                size="default"
                asChild
                className="w-full sm:text-base text-sm border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href={pdfFile} download="Checklist-Recrutement-WWP.pdf" className="flex items-center justify-center gap-2">
                  📥 Télécharger la Checklist PDF
                </a>
              </Button>
            </div>

            <div className="pt-2 sm:pt-4 flex justify-center">
              <Button
                variant="hero"
                size="default"
                onClick={handleClose}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
