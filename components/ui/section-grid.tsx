import { cn } from "@/lib/utils";

interface SectionGridProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionGrid({ className, children }: SectionGridProps) {
  return (
    <dl className={cn("grid grid-cols-12 gap-8 gap-y-2 sm:gap-y-4", className)}>
      {children}
    </dl>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <dt
      className={cn(
        // Faint, neutral divider similar to Fabian's list layout.
        "col-span-12 sm:col-span-4 border-t border-solid border-border/60 pt-4 sm:border-none sm:pt-0",
        className,
      )}
    >
      <h3 className="font-sans text-base font-medium text-foreground">
        {children}
      </h3>
    </dt>
  );
}

interface SectionContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function SectionContent({ className, children }: SectionContentProps) {
  return (
    <dd
      className={cn(
        "col-span-12 sm:col-span-8 border-t border-solid border-border/60 pt-4 sm:border-t sm:pt-2",
        className,
      )}
    >
      {children}
    </dd>
  );
}
