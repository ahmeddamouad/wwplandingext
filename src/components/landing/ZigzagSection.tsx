import { ReactNode } from 'react';

interface ZigzagSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  illustration: ReactNode;
  reverse?: boolean;
  bgColor?: 'background' | 'secondary';
}

const ZigzagSection = ({
  id,
  title,
  subtitle,
  children,
  illustration,
  reverse = false,
  bgColor = 'background',
}: ZigzagSectionProps) => {
  return (
    <section
      id={id}
      className={`section-padding ${bgColor === 'secondary' ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
            <div className="space-y-4">
              {children}
            </div>
          </div>

          {/* Illustration */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {illustration}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigzagSection;
