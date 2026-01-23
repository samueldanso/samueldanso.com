import { allPosts } from "content-collections";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionGrid, SectionTitle, SectionContent } from "@/components/ui/section-grid";

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
    <SectionGrid>
      <SectionTitle>Posts</SectionTitle>
      <SectionContent />
      {recentPosts.map((post, index) => (
        <div key={post._meta.path} className="contents">
          <dt className={`col-span-12 sm:col-span-4 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}>
            <h3 className="text-muted-foreground text-[15px] font-normal">
              <time dateTime={post.date}>
                {formatDate(new Date(post.date))}
              </time>
            </h3>
          </dt>
          <dd className={`col-span-12 sm:col-span-8 ${index > 0 ? "border-none pt-0" : ""}`}>
            <Link
              href={`/posts/${post._meta.path}`}
              className="text-base font-medium text-foreground underline decoration-border hover:decoration-foreground/40 transition-colors"
            >
              {post.title}
            </Link>
          </dd>
        </div>
      ))}
      <div className="contents">
        <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0"></dt>
        <dd className="col-span-12 sm:col-span-8 border-none pt-0">
          <Link
            href="/posts"
            className="text-foreground underline decoration-border hover:decoration-foreground/40 transition-colors text-base font-medium inline-flex items-center gap-1"
          >
            All posts <ArrowRight className="size-4" />
          </Link>
        </dd>
      </div>
    </SectionGrid>
  );
}
