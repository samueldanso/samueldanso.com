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
  // Sort posts by date (newest first)
  const sortedPosts = allWritings.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14">
        <div className="mb-6">
          <Link
            href="/"
            className="text-muted-foreground font-medium text-sm no-underline hover:underline"
          >
            <span className="text-muted-foreground/60">~</span> Home
          </Link>
        </div>
        <h1 className="font-display text-2xl mb-1">Writing</h1>
        <p className="text-muted-foreground">Collection of writing.</p>
      </section>

      {/* List Section */}
      <ul className="list-none space-y-2">
        {sortedPosts.map((post) => (
          <li key={post._meta.path} className="flex items-center gap-2 group">
            <Link
              href={`/writing/${post._meta.path}`}
              className="text-foreground font-medium no-underline overflow-hidden text-ellipsis whitespace-nowrap flex-shrink-[1] transition-all duration-200 group-hover:pl-1"
            >
              {post.title}
            </Link>
            <div className="min-w-[20px] flex-grow border-b border-dashed border-border transition-colors duration-200 group-hover:border-muted-foreground/30 h-[1px]" />
            <p className="text-muted-foreground/60 text-xs transition-colors duration-200 font-mono uppercase tabular-nums flex-shrink-0 whitespace-nowrap group-hover:text-muted-foreground">
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
