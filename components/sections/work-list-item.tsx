"use client";

interface WorkListItemProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
  onHover?: () => void;
  onLeave?: () => void;
}

export function WorkListItem({
  children,
  onHover,
  onLeave,
}: WorkListItemProps) {
  return (
    <div
      className="group/row grid grid-cols-subgrid col-span-12 px-4 py-3.5 rounded-lg border border-dashed border-border/70 bg-background/60 hover:border-border/90 hover:bg-muted/40 transition-all duration-200 ease-out"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
