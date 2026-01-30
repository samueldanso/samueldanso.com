import { cn } from "@/lib/utils";
import { DashedDivider } from "./grid-patterns";

interface SectionGridProps {
  children: React.ReactNode;
  className?: string;
  hideDivider?: boolean;
}

export function SectionGrid({
  className,
  children,
  hideDivider,
}: SectionGridProps) {
  return (
    <div className="flex flex-col">
      {!hideDivider && <DashedDivider className="mb-8 sm:mb-10" />}
      <dl
        className={cn("grid grid-cols-12 gap-8 gap-y-2 sm:gap-y-4", className)}
      >
        {children}
      </dl>
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <dt className={cn("col-span-12 sm:col-span-4 pt-0", className)}>
      <h3 className="font-title text-[18px] font-medium text-foreground">
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
    <dd className={cn("col-span-12 sm:col-span-8 pt-0", className)}>
      {children}
    </dd>
  );
}
