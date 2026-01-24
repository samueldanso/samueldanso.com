import { allAwards } from "content-collections";
import {
  SectionGrid,
  SectionTitle,
  SectionContent,
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
        <div key={`${award.year}-${award.title}`} className="contents">
          <dt
            className={`col-span-12 sm:col-span-4 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}
          >
            <h3 className="text-muted-foreground text-[15px] font-normal">
              {award.year}
            </h3>
          </dt>
          <dd
            className={`col-span-12 sm:col-span-8 ${index > 0 ? "border-none pt-0" : ""}`}
          >
            <div>
              <div className="text-base font-medium text-foreground">
                {award.title}
              </div>
              {award.description && (
                <p className="text-base text-muted-foreground leading-relaxed pt-1">
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
