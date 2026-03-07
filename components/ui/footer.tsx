"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      })
    : null;

  return (
    <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 pt-8 pb-16 px-7 sm:px-6 text-small text-muted-foreground">
      <span>
        &copy; {new Date().getFullYear()}{" "}
        Made with{" "}
        <span aria-label="love" role="img">
          ❤️
        </span>{" "}
        and minimalism by{" "}
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground border-b border-dashed border-transparent hover:border-foreground/60 transition-colors duration-200"
        >
          Samuel Danso
        </a>
      </span>
      <span className="tabular-nums">{time}</span>
    </footer>
  );
}
