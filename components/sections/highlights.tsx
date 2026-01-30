"use client";

import { allHighlights } from "content-collections";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DashedDivider } from "@/components/ui/grid-patterns";
import { useImageStore } from "@/lib/store/use-image";

function HighlightImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const { setSelectedImage, setDialogOpen } = useImageStore();

  function handleClick() {
    setSelectedImage(src);
    setDialogOpen(true);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  }

  return (
    <button
      type="button"
      className="w-full rounded-xl border border-muted overflow-hidden cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`View ${alt} in full screen`}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        sizes="(max-width: 768px) 85vw, 65vw"
        className="rounded-xl w-full h-auto aspect-[4/3] object-cover"
        style={{
          WebkitFilter: isLoading ? "blur(8px)" : "none",
          transition: "all 0.5s ease",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </button>
  );
}

export function Highlights() {
  const sorted = [...allHighlights].sort((a, b) => a.sort - b.sort);

  if (sorted.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <DashedDivider className="mb-8 sm:mb-10" />
      <h3 className="font-title text-[18px] font-medium text-foreground mb-6">
        Highlights
      </h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {sorted.map((item) => (
            <CarouselItem
              key={item._meta.filePath}
              className="basis-[85%] sm:basis-[65%]"
            >
              <HighlightImage src={item.image} alt={item.title} />
              <p className="text-[15px] text-muted-foreground pt-2">
                {item.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
