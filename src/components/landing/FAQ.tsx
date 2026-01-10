import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quel est le rôle d\'un cabinet de recrutement au Maroc?',
      answer:
        'Un cabinet de recrutement comme World Wide Progress accompagne les entreprises dans l\'identification, l\'évaluation et la sélection des meilleurs talents. Nous gérons l\'ensemble du processus : définition du besoin, sourcing, entretiens, évaluation et suivi post-intégration.',
    },
    {
      question: 'World Wide Progress propose-t-il du recrutement IT au Maroc?',
      answer:
        'Oui, le recrutement IT est l\'une de nos spécialités. Nous recrutons des développeurs, DevOps, Data Engineers, Product Owners, CTO, et autres profils tech. Notre équipe comprend les enjeux techniques et culturels des entreprises digitales.',
    },
    {
      question: 'Quel est le coût d\'un cabinet de recrutement au Maroc?',
      answer:
        'Nos honoraires sont alignés sur les standards du marché, généralement 13% du salaire annuel brut du candidat recruté. Cet investissement inclut l\'ensemble du processus de recrutement et notre garantie de remplacement de 3 mois.',
    },
    {
      question: 'Quelle est votre garantie en cas d\'échec du recrutement?',
      answer:
        'Nous offrons une garantie de remplacement de 3 mois. Si le candidat recruté ne convient pas ou quitte le poste durant cette période, nous relançons une recherche sans frais supplémentaires.',
    },
    {
      question: 'Combien de temps prend un recrutement avec votre cabinet?',
      answer:
        'Nous livrons généralement une première shortlist en 48h et finalisons le recrutement en 2 à 4 semaines, contre 2 à 4 mois avec les méthodes traditionnelles. Notre réactivité est l\'une de nos forces.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">FAQ – Cabinet de Recrutement Maroc</h2>
          <p className="body-lg">
            Réponses aux questions les plus fréquentes sur nos services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-card px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
