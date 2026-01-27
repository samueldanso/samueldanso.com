import { allWorks } from "content-collections";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  SectionGrid,
  SectionTitle,
  SectionContent,
} from "@/components/ui/section-grid";

export function SelectedWork() {
  // Sort projects by the sort field and take only featured (first 5-6)
  const sortedProjects = [...allWorks].sort((a, b) => a.sort - b.sort);
  const featuredProjects = sortedProjects.slice(0, 5);

  return (
    <SectionGrid>
      <SectionTitle>Selected Work</SectionTitle>
      <SectionContent />
      {featuredProjects.map((project, index) => (
        <div key={project._meta.path} className="contents">
          <dt
            className={`col-span-12 sm:col-span-4 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}
          >
            {project.date && (
              <h3 className="text-muted-foreground text-[15px] font-normal">
                {project.date}
              </h3>
            )}
          </dt>
          <dd
            className={`col-span-12 sm:col-span-8 ${index > 0 ? "border-none pt-0" : ""}`}
          >
            <div>
              <div className="mb-1">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline decoration-[1.5px] underline-offset-[2.5px] decoration-border hover:decoration-foreground/40 transition-colors inline-flex items-center gap-0.5 break-words"
                >
                  {project.title}
                  <ArrowRight
                    size={16}
                    className="inline ml-0.5 mb-0.5 decoration-transparent text-muted-foreground"
                  />
                </a>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pt-1">
                {project.description}
              </p>
            </div>
          </dd>
        </div>
      ))}
      {sortedProjects.length > featuredProjects.length && (
        <div className="contents">
          <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0"></dt>
          <dd className="col-span-12 sm:col-span-8 border-none pt-0">
            <Link
              href="/work"
              className="text-foreground underline decoration-border hover:decoration-foreground/40 transition-colors text-base font-medium inline-flex items-center gap-1"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </dd>
        </div>
      )}
    </SectionGrid>
  );
}
