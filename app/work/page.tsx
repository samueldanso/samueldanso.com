import {
  ArrowRight02Icon,
  Github01Icon,
  Link01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWorks } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getTechIcon } from "@/config/tech-icons";

export default function WorkPage() {
  const sortedProjects = [...allWorks].sort((a, b) => a.sort - b.sort);

  return (
    <div className="container py-6 md:py-8">
      <section className="pb-8 sm:pb-10">
        <div className="mb-4">
          <Link
            href="/"
            className="text-caption text-muted-foreground font-medium no-underline hover:text-foreground transition-colors duration-200"
          >
            <span className="text-muted-foreground/50">~</span> Home
          </Link>
        </div>
        <h1 className="text-[1.625rem] leading-tight font-display font-medium text-foreground mb-2">
          All Projects
        </h1>
        <p className="text-body text-muted-foreground">
          A curated record of my work, experiments, and shipped projects.
        </p>
      </section>

      <div className="space-y-6 pb-8">
        {sortedProjects.map((project) => (
          <div
            key={project._meta.path}
            className="group border border-dashed border-border/70 rounded-lg p-4 sm:p-5 transition-all duration-200 hover:border-border/90 hover:bg-muted/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.image && (
                <Link
                  href={`/work/${project._meta.path}`}
                  className="block overflow-hidden rounded-lg border border-dashed border-border/70"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
              )}

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1.5">
                  <h2 className="text-item-title font-title font-medium text-foreground">
                    {project.title}
                  </h2>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <HugeiconsIcon
                      icon={Link01Icon}
                      size={14}
                      strokeWidth={2}
                    />
                  </a>
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <HugeiconsIcon
                        icon={Github01Icon}
                        size={14}
                        strokeWidth={2}
                      />
                    </a>
                  )}
                </div>

                <p className="text-caption text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>

                <Link
                  href={`/work/${project._meta.path}`}
                  className="group/cs inline-flex items-center gap-1 text-caption font-medium text-foreground mb-3"
                >
                  <span className="border-b border-dashed border-foreground/60 group-hover/cs:border-foreground transition-colors duration-200">
                    View case study
                  </span>
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={13}
                    strokeWidth={2}
                    className="shrink-0 group-hover/cs:-translate-y-0.5 group-hover/cs:translate-x-0.5 transition-transform duration-200"
                  />
                </Link>

                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => {
                      const icon = getTechIcon(tech);
                      return (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="rounded-sm font-normal text-small px-2.5 py-0.5 gap-1.5"
                        >
                          {icon?.logoUrl && (
                            <img
                              src={icon.logoUrl}
                              alt={tech}
                              width={12}
                              height={12}
                              className={`shrink-0 object-contain ${icon.invertInDarkMode ? "dark:invert" : ""} ${icon.invertInLightMode ? "invert dark:invert-0" : ""}`}
                            />
                          )}
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {sortedProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No work yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
