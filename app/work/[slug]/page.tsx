import { Github01Icon, GlobalIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWorks } from "content-collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDX } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";

interface WorkPage {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WorkPage): Promise<Metadata> {
  const { slug } = await params;
  const project = allWorks.find((p) => p._meta.path === slug);
  if (!project) return { title: "Work Not Found" };
  return {
    title: { absolute: project.title },
    description: project.description,
  };
}

export default async function WorkPage({ params }: WorkPage) {
  const { slug } = await params;
  const project = allWorks.find((p) => p._meta.path === slug);
  if (!project) return notFound();

  return (
    <div className="container">
      {/* Header */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8">
        <div className="mb-6">
          <Link
            href="/work"
            className="text-muted-foreground font-medium text-sm no-underline hover:underline"
          >
            <span className="text-muted-foreground/60">~</span> Work
          </Link>
        </div>
      </section>

      {/* Preview Image */}
      {project.image && (
        <div className="rounded-xl border border-muted overflow-hidden mb-6">
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

      {/* Action Links */}
      <div className="flex items-center justify-center gap-8 py-4 mb-8 border-b border-dashed border-border">
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <HugeiconsIcon icon={Github01Icon} size={16} strokeWidth={2} />
            Github
          </a>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <HugeiconsIcon icon={GlobalIcon} size={16} strokeWidth={2} />
            Website
          </a>
        )}
      </div>

      {/* Title + Status */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-title text-2xl font-medium text-foreground">
          {project.title}
        </h1>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500" />
          {project.status}
        </div>
      </div>

      {/* Description */}
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Timeline */}
      {project.timeline && (
        <div className="mb-6">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-2">
            Timeline
          </h3>
          <p className="text-[15px] text-muted-foreground">{project.timeline}</p>
        </div>
      )}

      {/* Role */}
      {project.role && (
        <div className="mb-6">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-2">
            Role
          </h3>
          <p className="text-[15px] text-muted-foreground">{project.role}</p>
        </div>
      )}

      {/* Overview */}
      {project.overview && (
        <div className="mb-6">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-2">
            Overview
          </h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>
      )}

      {/* MDX Content */}
      {project.mdx && (
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
          <MDX code={project.mdx} />
        </div>
      )}

      {/* Tools (from stack) */}
      {project.stack && project.stack.length > 0 && (
        <div className="mb-10">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-3">
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-full font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Team */}
      {project.team && project.team.length > 0 && (
        <div className="mb-10">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-3">
            Team
          </h3>
          <ul className="text-[15px] text-muted-foreground space-y-1">
            {project.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Award */}
      {project.award && (
        <div className="mb-10">
          <h3 className="font-title text-[15px] font-medium text-foreground mb-3">
            Award
          </h3>
          <Badge
            variant="outline"
            className="rounded-full font-normal text-[13px] py-1.5 px-3"
          >
            {project.award}
          </Badge>
        </div>
      )}

      {/* Navigation */}
      {(project.prev || project.next) && (
        <div className="mt-10 pt-10 border-t border-dashed">
          <div className="flex justify-between items-center">
            {project.prev && (
              <Link
                href={`/work/${project.prev._meta.path}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {project.prev.title}
              </Link>
            )}
            {project.next && (
              <Link
                href={`/work/${project.next._meta.path}`}
                className="text-muted-foreground hover:text-foreground transition-colors ml-auto"
              >
                {project.next.title} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
