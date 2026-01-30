"use client";

import Image from "next/image";

interface ProjectPreviewCardProps {
  title: string;
  image: string;
  top: number;
  visible: boolean;
}

export function ProjectPreviewCard({
  title,
  image,
  top,
  visible,
}: ProjectPreviewCardProps) {
  return (
    <div
      className="pointer-events-none fixed z-50 w-64 overflow-hidden rounded-xl border bg-card shadow-lg"
      style={{
        top,
        right: "max(1rem, calc((100vw - 768px) / 2 - 5.5rem))",
        opacity: visible ? 1 : 0,
        transform: `translateX(${visible ? "0" : "8px"}) scale(${visible ? 1 : 0.97})`,
        transition: "opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="288px"
          priority={false}
        />
      </div>
    </div>
  );
}
