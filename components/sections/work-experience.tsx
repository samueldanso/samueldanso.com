import { allWorks } from "content-collections";
import { Badge } from "@/components/ui/badge";
import { SectionGrid, SectionTitle, SectionContent } from "@/components/ui/section-grid";
import { ArrowUpRight } from "lucide-react";

export function WorkExperience() {
  const experiences = [...allWorks].sort((a, b) => {
    const ay = Number(a.year);
    const by = Number(b.year);
    if (Number.isFinite(ay) && Number.isFinite(by)) return by - ay;
    return b.year.localeCompare(a.year);
  });

  return (
    <SectionGrid>
      <SectionTitle>Experience</SectionTitle>
      <SectionContent />
      {experiences.map((experience, index) => (
        <div key={`${experience.year}-${experience.company}`} className="contents">
          <dt
            className={`col-span-12 sm:col-span-4 ${
              index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-muted-foreground text-[15px] font-normal">
                {experience.year}
              </h3>
              {experience.isPresent && (
                <Badge variant="secondary" className="rounded-full px-2 py-0.5">
                  Present
                </Badge>
              )}
            </div>
          </dt>

          <dd
            className={`col-span-12 sm:col-span-8 ${
              index > 0 ? "border-none pt-0" : ""
            }`}
          >
            <div className="text-base font-normal text-foreground">
              {experience.role}
            </div>

            <div className="pt-0.5">
              {experience.companyHref ? (
                <a
                  href={experience.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline decoration-[1.5px] underline-offset-[2.5px] decoration-border hover:decoration-foreground/40 transition-colors inline-flex items-center gap-0.5 break-words"
                >
                  {experience.company}
                  <ArrowUpRight
                    size={16}
                    className="inline ml-0.5 mb-0.5 decoration-transparent text-muted-foreground"
                  />
                </a>
              ) : (
                <div className="text-foreground">{experience.company}</div>
              )}
            </div>

            <div className="pt-1 text-[15px] text-muted-foreground font-normal">
              {experience.location}
            </div>
          </dd>
        </div>
      ))}
    </SectionGrid>
  );
}
