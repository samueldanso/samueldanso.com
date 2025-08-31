"use client";

import { useImageStore } from "@/lib/store/use-image";
import Image from "next/image";
import React from "react";

export interface ImageShellProps {
  imageUrl: string;
  alt?: string;
  caption?: string;
}

export function ImageShell({
  imageUrl,
  alt = "Image",
  caption,
}: ImageShellProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const { setDialogOpen, setSelectedImage } = useImageStore();

  function handleImageClick(url: string) {
    setSelectedImage(url);
    setDialogOpen(true);
  }

  function handleKeyDown(event: React.KeyboardEvent, url: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleImageClick(url);
    }
  }

  return (
    <div className="my-6">
      <button
        type="button"
        className="w-full rounded-xl border border-muted overflow-hidden cursor-pointer"
        onClick={() => handleImageClick(imageUrl)}
        onKeyDown={(e) => handleKeyDown(e, imageUrl)}
        aria-label={`View ${alt || "image"} in full screen`}
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl w-full h-auto"
          style={{
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
        />
      </button>
      {caption && (
        <p className="text-sm text-muted-foreground text-center mt-2 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
