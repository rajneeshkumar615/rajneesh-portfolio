import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <span className="mono-label text-xs text-accent">{eyebrow}</span>
      <h2 className="text-balance mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-balance text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
