import { ShellSection } from "@/components/ui/shell";
import { allPosts } from "content-collections";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function RecentPosts() {
  // Sort posts by date (newest first) and take only recent (first 4-5)
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const recentPosts = sortedPosts.slice(0, 5);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <ShellSection index={5} title="Recent Posts">
      <div className="space-y-3">
        {recentPosts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post._meta.path}`}
            className="block group"
          >
            <div className="flex items-start gap-3">
              <time
                dateTime={post.date}
                className="text-muted-foreground text-sm font-normal flex-shrink-0 min-w-[80px]"
              >
                {formatDate(new Date(post.date))}
              </time>
              <span className="text-foreground font-medium text-[15px] group-hover:underline transition-all duration-200">
                {post.title}
              </span>
            </div>
          </Link>
        ))}
        <Link
          href="/blog"
          className="text-foreground underline hover:no-underline transition-all duration-200 text-[15px] font-medium inline-flex items-center gap-1 mt-2"
        >
          All posts <ArrowRight className="size-4" />
        </Link>
      </div>
    </ShellSection>
  );
}
