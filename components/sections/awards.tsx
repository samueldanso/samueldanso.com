import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allAwards } from "content-collections";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

export function Awards() {
  const sortedAwards = [...allAwards].sort((a, b) => {
    const ay = Number(a.year);
    const by = Number(b.year);
    if (Number.isFinite(ay) && Number.isFinite(by)) return by - ay;
    return b.year.localeCompare(a.year);
  });

  if (sortedAwards.length === 0) {
    return null;
  }

  return (
    <SectionGrid>
      <SectionTitle>Awards</SectionTitle>
      <SectionContent />
      {sortedAwards.map((award, index) => (
        <div key={`${award.year}-${award.title}`} className="group/row grid grid-cols-subgrid col-span-12">
          <dt
            className={`col-span-12 sm:col-span-4 sm:pt-0.5 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}
          >
            <h3 className="text-muted-foreground text-[15px] font-normal">
              {award.year}
            </h3>
          </dt>
          <dd
            className={`col-span-12 sm:col-span-8 ${index > 0 ? "border-none pt-0" : ""}`}
          >
            <div>
              {award.href ? (
                <a
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-1 font-title text-[18px] font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-all duration-200 group-hover/row:translate-x-0.5"
                >
                  {award.title}
                  <HugeiconsIcon
                    icon={ArrowUpRight03Icon}
                    size={14}
                    strokeWidth={2}
                    className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ) : (
                <div className="font-title text-[18px] font-medium text-foreground transition-all duration-200 group-hover/row:translate-x-0.5">
                  {award.title}
                </div>
              )}
              {award.description && (
                <p className="text-[15px] text-muted-foreground leading-relaxed pt-1">
                  {award.description}
                </p>
              )}
            </div>
          </dd>
        </div>
      ))}
    </SectionGrid>
  );
}
