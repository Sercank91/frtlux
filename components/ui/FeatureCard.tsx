import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-md p-8 transition-all duration-500 hover:border-primary/50 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-primary/5 overflow-hidden h-full">
      {/* Animated gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 -z-10" />

      {/* Icon with animated background */}
      <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ring-1 ring-inset ring-primary/20">
        <Icon className="text-primary group-hover:text-primary transition-colors duration-300" size={32} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
        {description}
      </p>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
    </div>
  );
}
