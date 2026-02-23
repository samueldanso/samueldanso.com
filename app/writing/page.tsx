import { allWritings } from "content-collections";
import Link from "next/link";

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export default function WritingPage() {
  const sortedPosts = allWritings.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

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
        <h1 className="text-[1.625rem] leading-tight font-display text-foreground mb-2">
          Writing
        </h1>
        <p className="text-body text-muted-foreground">
          Thoughts on the intersection of code, design, and building products.
        </p>
      </section>

      <ul className="list-none space-y-1.5">
        {sortedPosts.map((post) => (
          <li
            key={post._meta.path}
            className="flex items-center gap-3 group py-1"
          >
            <Link
              href={`/writing/${post._meta.path}`}
              className="text-item-title font-title font-medium text-foreground no-underline overflow-hidden text-ellipsis whitespace-nowrap flex-shrink-[1] transition-all duration-200 group-hover:pl-0.5"
            >
              {post.title}
            </Link>
            <div className="min-w-[20px] flex-grow border-b border-dashed border-border transition-colors duration-200 group-hover:border-muted-foreground/30 h-[1px]" />
            <p className="text-muted-foreground/50 text-small font-mono uppercase tabular-nums flex-shrink-0 whitespace-nowrap transition-colors duration-200 group-hover:text-muted-foreground">
              {formatDate(new Date(post.date))}
            </p>
          </li>
        ))}

        {sortedPosts.length === 0 && (
          <li className="text-center py-12 text-muted-foreground">
            <p>No writing yet. Check back soon!</p>
          </li>
        )}
      </ul>
    </div>
  );
}
