import { ReactNode } from 'react';

interface SectionIllustrationProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

const SectionIllustration = ({ children, variant = 'primary' }: SectionIllustrationProps) => {
  const bgGradients = {
    primary: 'from-primary/10 via-primary/5 to-transparent',
    secondary: 'from-secondary via-secondary/50 to-transparent',
    accent: 'from-accent/10 via-accent/5 to-transparent',
  };

  return (
    <div className="relative bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl overflow-hidden min-h-[300px] flex items-center justify-center">
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${bgGradients[variant]} rounded-full blur-3xl`} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${bgGradients[variant]} rounded-full blur-3xl`} />
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default SectionIllustration;
