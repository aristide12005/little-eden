import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export const StepCard = ({ number, title, description, className, delay = 0 }: StepCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-eden-green-dark text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-5">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
