import { Github01Icon, GlobalIcon } from "@hugeicons/core-free-icons";
import { SubPageNav } from "@/components/sections/sub-page-nav";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWorks } from "content-collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDX } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allWorks.find((p) => p._meta.path === slug);
  if (!project) return { title: "Work Not Found" };
  return {
    title: { absolute: project.title },
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = allWorks.find((p) => p._meta.path === slug);
  if (!project) return notFound();

  return (
    <div className="container py-6 md:py-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/work"
          className="text-caption text-muted-foreground font-medium no-underline hover:text-foreground transition-colors duration-200"
        >
          <span className="text-muted-foreground/50">~</span> Work
        </Link>
        <SubPageNav />
      </div>

      {project.image && (
        <div className="rounded-lg border border-border/50 overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}

      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-dashed border-border">
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-caption text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <HugeiconsIcon icon={Github01Icon} size={14} strokeWidth={2} />
            GitHub
          </a>
        )}
        {project.source && project.href && (
          <span className="text-border select-none">/</span>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-caption text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <HugeiconsIcon icon={GlobalIcon} size={14} strokeWidth={2} />
            Website
          </a>
        )}
      </div>

      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[1.625rem] leading-tight font-display text-foreground">
          {project.title}
        </h1>
        {project.status && (
          <div className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {project.status}
          </div>
        )}
      </div>

      <p className="text-body text-muted-foreground leading-relaxed mb-8">
        {project.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 py-6 border-y border-dashed border-border">
        {project.timeline && (
          <div>
            <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-1.5">
              Timeline
            </h3>
            <p className="text-body text-foreground">{project.timeline}</p>
          </div>
        )}
        {project.role && (
          <div>
            <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-1.5">
              Role
            </h3>
            <p className="text-body text-foreground">{project.role}</p>
          </div>
        )}
        {project.stack && project.stack.length > 0 && (
          <div>
            <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-1.5">
              Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-full font-normal text-small px-2.5 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {project.overview && (
        <div className="mb-8">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Overview
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>
      )}

      {project.problem && (
        <div className="mb-8">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Problem
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </div>
      )}

      {project.whatIBuilt && (
        <div className="mb-8">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            What I Built
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {project.whatIBuilt}
          </p>
        </div>
      )}

      {project.challenges && (
        <div className="mb-8">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Challenges
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {project.challenges}
          </p>
        </div>
      )}

      {project.outcome && (
        <div className="mb-8">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Outcome
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {project.outcome}
          </p>
        </div>
      )}

      {project.mdx && (
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-10">
          <MDX code={project.mdx} />
        </div>
      )}

      {project.team && project.team.length > 0 && (
        <div className="mb-10">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Team
          </h3>
          <ul className="text-body text-muted-foreground space-y-1">
            {project.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {project.award && (
        <div className="mb-10">
          <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-3">
            Award
          </h3>
          <Badge
            variant="outline"
            className="rounded-full font-normal text-caption py-1.5 px-3"
          >
            {project.award}
          </Badge>
        </div>
      )}

      {(project.prev || project.next) && (
        <div className="mt-10 pt-8 border-t border-dashed border-border">
          <div className="flex justify-between items-center">
            {project.prev && (
              <Link
                href={`/work/${project.prev._meta.path}`}
                className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                &larr; {project.prev.title}
              </Link>
            )}
            {project.next && (
              <Link
                href={`/work/${project.next._meta.path}`}
                className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-200 ml-auto"
              >
                {project.next.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
