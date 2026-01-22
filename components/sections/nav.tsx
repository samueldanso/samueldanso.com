"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export function Nav() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [showHint, setShowHint] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show hint if user hasn't used keyboard nav before
    const hasUsedNav = localStorage.getItem("nav-hint-dismissed");
    if (!hasUsedNav) {
      setShowHint(true);
      // Auto-hide after 5 seconds anyway
      const timer = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    localStorage.setItem("nav-hint-dismissed", "true");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handler = (e: KeyboardEvent) => {
      // Don't trigger if typing in input
      const active = document.activeElement;
      if (active?.tagName === "INPUT" || active?.tagName === "TEXTAREA") return;

      // Navigate with keyboard
      if (e.key === "1" && !e.metaKey && !e.ctrlKey) {
        dismissHint();
        router.push("/");
      } else if (e.key === "2" && !e.metaKey && !e.ctrlKey) {
        dismissHint();
        router.push("/blog");
      } else if (e.key === "3" && !e.metaKey && !e.ctrlKey) {
        dismissHint();
        router.push("/projects");
      } else if (e.key === "t" && !e.metaKey && !e.ctrlKey) {
        dismissHint();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mounted, theme, router, setTheme, dismissHint]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Desktop nav - bottom left */}
      <nav className="fixed bottom-6 left-6 z-50 font-mono text-xs hidden lg:block">
        {showHint && (
          <div className="mb-3 text-neutral-300 dark:text-neutral-700 animate-pulse">
            press keys to navigate
          </div>
        )}
        <div className="flex flex-col gap-1 text-neutral-400 dark:text-neutral-600">
          <Link
            href="/"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-300 dark:text-neutral-700">[1]</span>{" "}
            home
          </Link>
          <Link
            href="/blog"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-300 dark:text-neutral-700">[2]</span>{" "}
            blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-300 dark:text-neutral-700">[3]</span>{" "}
            projects
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="text-left hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-300 dark:text-neutral-700">[t]</span>{" "}
            {theme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </nav>

      {/* Mobile nav - bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Expanded menu */}
        {mobileOpen && (
          <div className="bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800 px-6 py-4">
            <div className="flex flex-col gap-3 font-mono text-sm text-neutral-600 dark:text-neutral-400">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="active:text-neutral-900 dark:active:text-neutral-100"
              >
                → home
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="active:text-neutral-900 dark:active:text-neutral-100"
              >
                → blog
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="active:text-neutral-900 dark:active:text-neutral-100"
              >
                → projects
              </Link>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="text-left active:text-neutral-900 dark:active:text-neutral-100"
              >
                → {theme === "dark" ? "light mode" : "dark mode"}
              </button>
            </div>
          </div>
        )}

        {/* Toggle bar */}
        <div className="bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full px-6 py-4 font-mono text-xs text-neutral-500 dark:text-neutral-500 flex items-center justify-between"
          >
            <span>{mobileOpen ? "× close" : "↑ menu"}</span>
            <span className="text-neutral-400 dark:text-neutral-600">
              samueldanso.com
            </span>
          </button>
        </div>
      </nav>

      {/* Spacer for mobile to prevent content being hidden behind nav */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
