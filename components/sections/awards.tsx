import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allAwards } from "content-collections";
import { WorkListItem } from "@/components/sections/work-list-item";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

export function Awards() {
  const sortedAwards = [...allAwards].sort((a, b) => a.sort - b.sort);

  if (sortedAwards.length === 0) {
    return null;
  }

  return (
    <SectionGrid>
      <SectionTitle>Awards</SectionTitle>
      <SectionContent />
      <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-2">
        {sortedAwards.map((award) => (
          <WorkListItem key={`${award.year}-${award.title}`}>
            <dd className="col-span-12 sm:col-span-8">
              <div>
                {award.href ? (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1 text-item-title font-title font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60 transition-all duration-200"
                  >
                    {award.title}
                    <HugeiconsIcon
                      icon={ArrowUpRight03Icon}
                      size={13}
                      strokeWidth={2}
                      className="translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </a>
                ) : (
                  <div className="text-item-title font-title font-medium text-foreground">
                    {award.title}
                  </div>
                )}
                {award.description && (
                  <p className="text-caption text-muted-foreground leading-relaxed pt-1">
                    {award.description}
                  </p>
                )}
              </div>
            </dd>
            <dt className="col-span-12 sm:col-span-4 sm:pt-0.5 sm:text-right">
              <span className="text-caption text-muted-foreground">
                {award.year}
              </span>
            </dt>
          </WorkListItem>
        ))}
      </div>
    </SectionGrid>
  );
}
