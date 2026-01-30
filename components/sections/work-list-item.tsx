"use client";

import { useCallback, useRef, useState } from "react";
import { ProjectPreviewCard } from "@/components/ui/project-preview-card";

interface WorkListItemProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

export function WorkListItem({
  title,
  image,
  children,
}: WorkListItemProps) {
  const [hovered, setHovered] = useState(false);
  const [cardTop, setCardTop] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (!image || !rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setCardTop(rect.top);
    setHovered(true);
  }, [image]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <div
      ref={rowRef}
      className="group/row grid grid-cols-subgrid col-span-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {image && (
        <ProjectPreviewCard
          title={title}
          image={image}
          top={cardTop}
          visible={hovered}
        />
      )}
    </div>
  );
}
