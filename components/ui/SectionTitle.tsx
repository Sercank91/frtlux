interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'flex flex-col items-center text-center' : ''} ${className}`}>
      <div className="relative inline-block">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4 tracking-tight">
          {title}
        </h2>
        {/* Decorative line */}
        <div className={`h-1 w-20 bg-primary/80 rounded-full mt-2 mb-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      </div>
      
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
