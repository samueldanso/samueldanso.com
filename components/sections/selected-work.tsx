"use client";

import {
  ArrowRight02Icon,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWorks } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { WorkListItem } from "@/components/sections/work-list-item";
import { ProjectPreviewCard } from "@/components/ui/project-preview-card";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

interface ActiveProject {
  image: string;
  title: string;
}

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<ActiveProject | null>(
    null,
  );
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sortedProjects = [...allWorks].sort((a, b) => a.sort - b.sort);
  const featuredProjects = sortedProjects.slice(0, 4);

  function handleHover(project: ActiveProject) {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveProject(project);
  }

  function handleLeave() {
    leaveTimeoutRef.current = setTimeout(() => setActiveProject(null), 80);
  }

  return (
    <SectionGrid>
      <SectionTitle>Selected Work</SectionTitle>
      <SectionContent />
      <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-3">
        {featuredProjects.map((project) => (
          <WorkListItem
            key={project._meta.path}
            title={project.title}
            image={project.image}
            onHover={() =>
              project.image
                ? handleHover({ image: project.image, title: project.title })
                : undefined
            }
            onLeave={handleLeave}
          >
            <dd className="col-span-12 sm:col-span-8">
              <div className="flex items-center gap-2">
                {project.icon && (
                  <Image
                    src={project.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0 rounded-sm"
                  />
                )}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-flex items-center gap-1 text-item-title font-title font-medium text-foreground"
                >
                  <span className="border-b border-dashed border-foreground/60 group-hover/row:border-foreground transition-colors duration-200">
                    {project.title}
                  </span>
                  <HugeiconsIcon
                    icon={ArrowUpRight03Icon}
                    size={13}
                    strokeWidth={2}
                    className="text-muted-foreground group-hover/row:text-foreground/70 group-hover/row:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed pt-1">
                {project.description}
              </p>
            </dd>
            <dt className="col-span-12 sm:col-span-4 sm:pt-0.5 sm:text-right mb-0.5 sm:mb-0">
              {project.date && (
                <span className="text-caption text-muted-foreground">
                  {project.date}
                </span>
              )}
            </dt>
          </WorkListItem>
        ))}
      </div>
      {sortedProjects.length > featuredProjects.length && (
        <div className="contents">
          <dd className="col-span-12 sm:col-span-8 border-none pt-1">
            <Link
              href="/work"
              className="group inline-flex items-center gap-1 text-caption text-muted-foreground font-medium hover:text-foreground transition-colors duration-200"
            >
              <span className="border-b border-dashed border-foreground/40 group-hover:border-foreground/60 transition-colors duration-200">
                See all projects
              </span>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={13}
                strokeWidth={2}
                className="translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </Link>
          </dd>
          <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0" />
        </div>
      )}
      <ProjectPreviewCard
        image={activeProject?.image}
        title={activeProject?.title}
        visible={!!activeProject}
      />
    </SectionGrid>
  );
}
