import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allExperiences } from "content-collections";
import { WorkListItem } from "@/components/sections/work-list-item";
import { Badge } from "@/components/ui/badge";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

export function Experience() {
  const experiences = [...allExperiences].sort((a, b) => {
    const ay = Number(a.year);
    const by = Number(b.year);
    if (Number.isFinite(ay) && Number.isFinite(by)) return by - ay;
    return b.year.localeCompare(a.year);
  });

  return (
    <SectionGrid>
      <SectionTitle>Experience</SectionTitle>
      <SectionContent />
      <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-2">
        {experiences.map((experience) => (
          <WorkListItem key={`${experience.year}-${experience.company}`}>
            <dd className="col-span-12 sm:col-span-8">
              <div className="text-base font-normal text-foreground">
                {experience.role}
              </div>

              <div className="pt-0.5">
                {experience.companyHref ? (
                  <a
                    href={experience.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1 font-title text-[18px] font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-all duration-200 group-hover/row:translate-x-0.5"
                  >
                    {experience.company}
                    <HugeiconsIcon
                      icon={ArrowUpRight03Icon}
                      size={14}
                      strokeWidth={2}
                      className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ) : (
                  <div className="text-foreground">{experience.company}</div>
                )}
              </div>

              <div className="pt-1 text-[14px] text-muted-foreground font-normal">
                {experience.location}
              </div>
            </dd>

            <dt className="col-span-12 sm:col-span-4 sm:pt-0.5 sm:text-right">
              <div className="flex items-center sm:justify-end gap-2">
                <h3 className="text-muted-foreground text-[14px] font-normal">
                  {experience.year}
                </h3>
                {experience.isPresent && (
                  <Badge
                    variant="secondary"
                    className="rounded-full px-2 py-0.5"
                  >
                    Present
                  </Badge>
                )}
              </div>
            </dt>
          </WorkListItem>
        ))}
      </div>
    </SectionGrid>
  );
}
