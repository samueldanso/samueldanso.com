import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dotted grid background pattern
 * Usage: Wrap content or use as absolute positioned background
 */
export function DottedGrid({ className, children }: GridPatternProps) {
  return (
    <div
      className={cn(
        "relative",
        "[background-image:radial-gradient(var(--dot-color,oklch(0.7_0_0/0.3))_1px,transparent_1px)]",
        "[background-size:var(--dot-spacing,16px)_var(--dot-spacing,16px)]",
        "dark:[background-image:radial-gradient(var(--dot-color,oklch(0.5_0_0/0.25))_1px,transparent_1px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Diagonal hatched lines pattern (like deeplakhani.co)
 * Usage: Section dividers or decorative backgrounds
 */
export function DiagonalHatch({ className }: GridPatternProps) {
  return (
    <div
      className={cn(
        "h-8 w-full",
        "[background-image:repeating-linear-gradient(135deg,var(--hatch-color,oklch(0.85_0_0))_0px,var(--hatch-color,oklch(0.85_0_0))_1px,transparent_1px,transparent_6px)]",
        "dark:[background-image:repeating-linear-gradient(135deg,var(--hatch-color,oklch(0.3_0_0))_0px,var(--hatch-color,oklch(0.3_0_0))_1px,transparent_1px,transparent_6px)]",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/**
 * Vertical line border on left side (like s.efferd.com)
 * Usage: Wrap content sections
 */
export function VerticalLineSection({ className, children }: GridPatternProps) {
  return (
    <div
      className={cn(
        "relative pl-4 sm:pl-6",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-px",
        "before:bg-border",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Dashed border container (like rinkitadhana.com)
 * Usage: Cards or section wrappers
 */
export function DashedBorderBox({ className, children }: GridPatternProps) {
  return (
    <div
      className={cn(
        "border border-dashed border-border rounded-lg p-4 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Full-width grid lines (horizontal + vertical like notebook paper)
 * Usage: Background decoration
 */
export function GridLines({ className, children }: GridPatternProps) {
  return (
    <div
      className={cn(
        "relative",
        "[background-image:linear-gradient(var(--grid-color,oklch(0.92_0_0))_1px,transparent_1px),linear-gradient(90deg,var(--grid-color,oklch(0.92_0_0))_1px,transparent_1px)]",
        "[background-size:var(--grid-size,40px)_var(--grid-size,40px)]",
        "dark:[background-image:linear-gradient(var(--grid-color,oklch(0.25_0_0))_1px,transparent_1px),linear-gradient(90deg,var(--grid-color,oklch(0.25_0_0))_1px,transparent_1px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Subtle dot pattern background overlay (positioned absolute)
 * Usage: Add as child of relative container for subtle texture
 */
export function DottedOverlay({ className }: GridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        "[background-image:radial-gradient(var(--dot-color,oklch(0.6_0_0/0.15))_1px,transparent_1px)]",
        "[background-size:var(--dot-spacing,20px)_var(--dot-spacing,20px)]",
        "dark:[background-image:radial-gradient(var(--dot-color,oklch(0.5_0_0/0.1))_1px,transparent_1px)]",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/**
 * Dashed vertical lines on left and right sides (like kartikeyverma.com)
 * Usage: Wrap page content for full-height dashed border lines
 */
export function DashedVerticalLines({ className, children }: GridPatternProps) {
  return (
    <div className={cn("relative min-h-screen flex flex-col", className)}>
      {/* Left dashed line */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px border-l border-dashed border-border"
        aria-hidden="true"
      />
      {/* Right dashed line */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-px border-r border-dashed border-border"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

/**
 * Single horizontal dashed line that intersects with the vertical lines
 * Usage: Place at top or bottom of page for frame effect (outside container)
 */
export function HorizontalDashedLine({ className }: GridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none w-full border-t border-dashed border-border",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/**
 * Double horizontal dashed divider (like kartikeyverma.com section separators)
 * Extends to touch the vertical dashed lines on edges
 * Usage: Place between major sections as structural separator
 */
export function DashedDivider({ className }: GridPatternProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 -mx-[28px] sm:-mx-6", className)}
      aria-hidden="true"
    >
      <div className="w-full border-t border-dashed border-border" />
      <div className="w-full border-t border-dashed border-border" />
    </div>
  );
}
