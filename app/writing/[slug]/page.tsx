import { allWritings } from "content-collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubPageNav } from "@/components/sections/sub-page-nav";
import { readingTime } from "reading-time-estimator";
import { MDX } from "@/components/mdx";

interface WritingPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allWritings.find((p) => p._meta.path === slug);
  if (!post) return { title: "Writing Not Found" };
  return {
    title: { absolute: post.title },
    description: post.summary,
  };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const post = allWritings.find((p) => p._meta.path === slug);
  if (!post) return notFound();

  const readingTimeMinutes = readingTime(post.content).minutes;

  return (
    <div className="container py-6 md:py-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/writing"
          className="text-caption text-muted-foreground font-medium no-underline hover:text-foreground transition-colors duration-200"
        >
          <span className="text-muted-foreground/50">~</span> Writing
        </Link>
        <SubPageNav />
      </div>

      <header className="pb-8 mb-8 border-b border-dashed border-border">
        <h1 className="text-[1.625rem] leading-tight font-display text-foreground mb-3">
          {post.title}
        </h1>
        {post.summary && (
          <p className="text-body text-muted-foreground mb-4">{post.summary}</p>
        )}
        <div className="flex items-center gap-3">
          <time
            dateTime={post.date}
            className="text-caption text-muted-foreground"
          >
            {formatDate(new Date(post.date))}
          </time>
          <span className="text-border select-none">/</span>
          <span className="text-caption text-muted-foreground">
            {readingTimeMinutes} min read
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/writing?tag=${tag}`}
                className="text-caption text-muted-foreground font-mono no-underline hover:text-foreground transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {post.image && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-zinc dark:prose-invert max-w-none mb-10">
        <MDX code={post.mdx} />
      </div>

      {(post.prev || post.next) && (
        <div className="mt-10 pt-8 border-t border-dashed border-border">
          <div className="flex justify-between items-center">
            {post.prev && (
              <Link
                href={`/writing/${post.prev._meta.path}`}
                className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                &larr; {post.prev.title}
              </Link>
            )}
            {post.next && (
              <Link
                href={`/writing/${post.next._meta.path}`}
                className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-200 ml-auto"
              >
                {post.next.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
