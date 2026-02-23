import {
  ArrowRight02Icon,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWritings } from "content-collections";
import Link from "next/link";
import { WorkListItem } from "@/components/sections/work-list-item";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function Writing() {
  const sortedPosts = [...allWritings].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const recentPosts = sortedPosts.slice(0, 5);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <SectionGrid>
      <SectionTitle>Writing</SectionTitle>
      <SectionContent />
      <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-2">
        {recentPosts.map((post) => (
          <WorkListItem
            key={post._meta.path}
            title={post.title}
            image={post.image}
          >
            <dd className="col-span-12 sm:col-span-8">
              <Link
                href={`/writing/${post._meta.path}`}
                className="group text-item-title font-title font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60 transition-all duration-200"
              >
                {post.title}
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  size={13}
                  strokeWidth={2}
                  className="inline-block ml-1 translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </Link>
            </dd>
            <dt className="col-span-12 sm:col-span-4 sm:pt-0.5 sm:text-right">
              <span className="text-caption text-muted-foreground transition-colors duration-200 group-hover/row:text-foreground/50">
                <time dateTime={post.date}>
                  {formatDate(new Date(post.date))}
                </time>
              </span>
            </dt>
          </WorkListItem>
        ))}
      </div>
      <div className="contents">
        <dd className="col-span-12 sm:col-span-8 border-none pt-1">
          <Link
            href="/writing"
            className="group inline-flex items-baseline gap-1 text-caption text-muted-foreground font-medium underline decoration-border underline-offset-4 hover:decoration-foreground/60 hover:text-foreground transition-all duration-200"
          >
            See all posts
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={13}
              strokeWidth={2}
              className="translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
            />
          </Link>
        </dd>
        <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0" />
      </div>
    </SectionGrid>
  );
}
