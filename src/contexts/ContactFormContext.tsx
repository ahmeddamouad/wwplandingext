import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactFormContextType {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
  setIsOpen: (open: boolean) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ isOpen, openContactForm, closeContactForm, setIsOpen }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};
