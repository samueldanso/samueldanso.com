"use client";

import { useEffect, useState } from "react";

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
    <footer className="flex items-center justify-between pt-8 pb-16 px-7 sm:px-6 text-small text-muted-foreground">
      <span>&copy; {new Date().getFullYear()} Samuel Danso</span>
      <span className="tabular-nums">{time}</span>
    </footer>
  );
}
