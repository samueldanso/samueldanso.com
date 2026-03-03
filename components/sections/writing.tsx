"use client";

import {
  ArrowRight02Icon,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { allWritings } from "content-collections";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

const PREVIEW_WIDTH = 320;

function PostPreviewCard({
  image,
  title,
  visible,
}: {
  image?: string;
  title?: string;
  visible: boolean;
}) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      rawX.set(e.clientX + 20);
      rawY.set(e.clientY - 100);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      initial={false}
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-xl border border-border bg-card p-1.5 shadow-xl"
      style={{ x, y, width: PREVIEW_WIDTH }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {image && (
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title ?? ""}
            width={PREVIEW_WIDTH}
            height={Math.round(PREVIEW_WIDTH * 0.625)}
            className="w-full h-auto object-cover rounded-lg"
            sizes={`${PREVIEW_WIDTH}px`}
            priority={false}
          />
        </div>
      )}
    </motion.div>
  );
}

function formatDate(date: Date): string {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function Writing() {
  const [activePost, setActivePost] = useState<{
    image: string;
    title: string;
  } | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sortedPosts = [...allWritings].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const recentPosts = sortedPosts.slice(0, 5);

  function handleHover(image: string, title: string) {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActivePost({ image, title });
  }

  function handleLeave() {
    leaveTimeoutRef.current = setTimeout(() => setActivePost(null), 80);
  }

  if (recentPosts.length === 0) return null;

  return (
    <SectionGrid>
      <SectionTitle>Writing</SectionTitle>
      <SectionContent />
      <div className="col-span-12 group/writing flex flex-col">
        {recentPosts.map((post) => (
          <div
            key={post._meta.path}
            className="transition-opacity duration-150 group-hover/writing:opacity-40 hover:!opacity-100 py-2"
            onMouseEnter={() =>
              post.image ? handleHover(post.image, post.title) : undefined
            }
            onMouseLeave={handleLeave}
          >
            <Link
              href={`/writing/${post._meta.path}`}
              className="group/title flex w-full items-center gap-2"
            >
              <span className="text-item-title font-title font-medium text-foreground min-w-0 shrink border-b border-dashed border-foreground/60 group-hover/title:border-foreground transition-colors duration-200">
                {post.title}
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={13}
                strokeWidth={2}
                className="text-muted-foreground shrink-0 group-hover/title:text-foreground/70 group-hover/title:-translate-y-0.5 transition-all duration-200"
              />
              <div className="flex-1 border-b border-dashed border-border/50 min-w-4" />
              <time
                dateTime={post.date}
                className="text-caption text-muted-foreground whitespace-nowrap shrink-0"
              >
                {formatDate(new Date(post.date))}
              </time>
            </Link>
          </div>
        ))}
        <div className="pt-2">
          <Link
            href="/writing"
            className="group inline-flex items-baseline gap-1 text-caption text-muted-foreground font-medium hover:text-foreground transition-colors duration-200"
          >
            See all posts
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={13}
              strokeWidth={2}
              className="translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
      <PostPreviewCard
        image={activePost?.image}
        title={activePost?.title}
        visible={!!activePost}
      />
    </SectionGrid>
  );
}
