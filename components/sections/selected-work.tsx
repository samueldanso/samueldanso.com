import { ArrowRight02Icon, ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWorks } from "content-collections";
import Link from "next/link";
import { WorkListItem } from "@/components/sections/work-list-item";
import { Badge } from "@/components/ui/badge";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

export function SelectedWork() {
  // Sort projects by the sort field and take only featured (first 5-6)
  const sortedProjects = [...allWorks].sort((a, b) => a.sort - b.sort);
  const featuredProjects = sortedProjects.slice(0, 5);

  return (
    <SectionGrid>
      <SectionTitle>Recent Work</SectionTitle>
      <SectionContent />
      {featuredProjects.map((project, index) => (
        <WorkListItem
          key={project._meta.path}
          title={project.title}
          image={project.image}
        >
          <dt
            className={`col-span-12 sm:col-span-4 sm:pt-0.5 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}
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
            <div className="flex items-baseline justify-between gap-2">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1 font-title text-[18px] font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-all duration-200 group-hover/row:translate-x-0.5"
              >
                {project.title}
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  size={14}
                  strokeWidth={2}
                  className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
              {project.status && (
                <Badge variant="secondary" className="rounded-full px-2 py-0.5">
                  {project.status}
                </Badge>
              )}
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed pt-1">
              {project.description}
            </p>
          </dd>
        </WorkListItem>
      ))}
      {sortedProjects.length > featuredProjects.length && (
        <div className="contents">
          <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0"></dt>
          <dd className="col-span-12 sm:col-span-8 border-none pt-0">
            <Link
              href="/work"
              className="group inline-flex items-baseline gap-1 text-muted-foreground font-medium underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
            >
              View all work
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={14}
                strokeWidth={2}
                className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>
          </dd>
        </div>
      )}
    </SectionGrid>
  );
}
