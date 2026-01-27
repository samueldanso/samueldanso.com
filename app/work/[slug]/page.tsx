import { allWorks } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icons } from "@/components/icons";
import { MDX } from "@/components/mdx";

interface WorkPage {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: WorkPage): Metadata {
  const project = allWorks.find(
    (project) => project._meta.path === params.slug,
  );

  if (!project) {
    return {
      title: "Work Not Found",
    };
  }

  return {
    title: {
      absolute: project.title,
    },
    description: project.description,
  };
}

export default function WorkPage({ params }: WorkPage) {
  const project = allWorks.find(
    (project) => project._meta.path === params.slug,
  );
  if (!project) return notFound();

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="pt-[180px] pb-[60px]">
        <div className="mb-6">
          <Link
            href="/work"
            className="text-muted-foreground font-medium text-sm no-underline hover:underline"
          >
            <span className="text-muted-foreground/60">~</span> Work
          </Link>
        </div>
        <h1 className="font-display text-2xl mb-1">{project.title}</h1>
        <p className="text-muted-foreground mb-1">{project.description}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-normal text-muted-foreground">
            {project.status}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm underline hover:no-underline flex items-center gap-1"
            >
              View Project
              <Icons.link className="size-3.5" />
            </a>
          )}
        </div>
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-muted-foreground/60 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      {project.mdx && (
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDX code={project.mdx} />
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
