import { allPosts } from "content-collections";
import Link from "next/link";
import { ShellSection } from "@/components/ui/shell";

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="container mx-auto py-8">
      <ShellSection index={1} title="Blog">
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <article key={post._meta.path} className="group">
              <Link
                href={`/posts/${post._meta.path}`}
                className="block p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors"
              >
                <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-3">{post.summary}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}

          {sortedPosts.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </ShellSection>
    </div>
  );
}
