"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useImageStore } from "@/lib/store/use-image";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

export interface ImageCarouselProps {
  imageUrls: string[];
}

export function ImageCarousel({ imageUrls }: ImageCarouselProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const { setSelectedImage, setDialogOpen } = useImageStore();

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

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  function handleDotClick(index: number) {
    api?.scrollTo(index);
  }

  return (
    <Carousel
      className="relative mt-2.5"
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {imageUrls.map((url) => (
          <CarouselItem key={url}>
            <button
              type="button"
              className="w-full rounded-xl border border-muted overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(url)}
              onKeyDown={(e) => handleKeyDown(e, url)}
              aria-label={`View image ${imageUrls.indexOf(url) + 1} of ${
                imageUrls.length
              }`}
            >
              <Image
                src={url}
                alt="screenshorts"
                width={1000}
                height={1000}
                sizes="100vw"
                className="rounded-xl aspect-[1200/850]"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  objectPosition: "center",
                  WebkitFilter: isImageLoading ? "blur(8px)" : "none",
                  transition: "all 0.5s ease",
                }}
                onLoad={() => setImageLoading(false)}
              />
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="prose prose-neutral dark:prose-invert"
      />
      <CarouselNext
        variant={"ghost"}
        className="prose prose-neutral dark:prose-invert"
      />

      <div className="w-full  flex justify-center items-center gap-1 mt-1">
        {imageUrls.map((url) => (
          <button
            key={url}
            type="button"
            className={cn(
              "size-2 rounded-full transition-colors duration-300 hover:bg-white/90",
              current === imageUrls.indexOf(url) ? "bg-white" : "bg-white/50",
            )}
            onClick={() => handleDotClick(imageUrls.indexOf(url))}
            aria-label={`Go to image ${imageUrls.indexOf(url) + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
