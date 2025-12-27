import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
  delay?: number;
}

export const ProgramCard = ({ image, title, description, features, className, delay = 0 }: ProgramCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border border-border/50",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-primary-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
