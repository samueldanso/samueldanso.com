import { MDX } from "@/components/mdx";
import { allPosts } from "content-collections";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readingTime } from "reading-time-estimator";

interface BlogPage {
  params: {
    slug: string;
  };
}

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export function generateMetadata({ params }: BlogPage): Metadata {
  const post = allPosts.find((post) => post._meta.path === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: {
      absolute: post.title,
    },
    description: post.summary,
  };
}

export default function BlogPage({ params }: BlogPage) {
  const post = allPosts.find((post) => post._meta.path === params.slug);
  if (!post) return notFound();

  const readingTimeMinutes = readingTime(post.content).minutes;

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="pt-[180px] pb-[60px]">
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-muted-foreground font-medium text-sm no-underline hover:underline"
          >
            <span className="text-muted-foreground/60">~</span> Blog
          </Link>
        </div>
        <h1 className="font-display text-2xl mb-1">{post.title}</h1>
        {post.summary && (
          <p className="text-muted-foreground mb-1">{post.summary}</p>
        )}
        <p className="text-muted-foreground/60 text-sm font-mono tabular-nums">
          {formatDate(new Date(post.date))}{" "}
          <span className="opacity-60 mx-1">•</span> {readingTimeMinutes} min
          read
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="text-muted-foreground text-sm font-mono no-underline hover:underline"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MDX code={post.mdx} />
      </div>
    </div>
  );
}
