import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, className, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-card rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
