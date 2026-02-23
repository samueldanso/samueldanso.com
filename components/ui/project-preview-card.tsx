"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectPreviewCardProps {
  image?: string;
  title?: string;
  visible: boolean;
}

const CARD_WIDTH = 320;

export function ProjectPreviewCard({
  image,
  title,
  visible,
}: ProjectPreviewCardProps) {
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
      style={{ x, y, width: CARD_WIDTH }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.95,
      }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {image && (
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title ?? ""}
            width={CARD_WIDTH}
            height={Math.round(CARD_WIDTH * 0.625)}
            className="w-full h-auto object-cover rounded-lg"
            sizes={`${CARD_WIDTH}px`}
            priority={false}
          />
        </div>
      )}
    </motion.div>
  );
}
