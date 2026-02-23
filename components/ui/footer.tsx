"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Footer() {
  const { theme, setTheme } = useTheme();
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
        second: "2-digit",
      })
    : null;

  return (
    <footer className="grid grid-cols-3 items-center py-8 px-7 sm:px-6 text-small text-muted-foreground">
      <span>&copy; {new Date().getFullYear()} Samuel Danso</span>
      <span className="text-center tabular-nums">{time}</span>
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <HugeiconsIcon
            icon={theme === "dark" ? Moon02Icon : Sun03Icon}
            size={15}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </footer>
  );
}
