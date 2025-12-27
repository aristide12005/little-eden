import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
  return (
    <div className="page-header relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-sunshine blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
