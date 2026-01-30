"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  CommandIcon as CommandHugeIcon,
  File01Icon,
  Folder01Icon,
  Mail01Icon,
  NewTwitterIcon,
  Loading03Icon,
  Moon02Icon,
  Sun01Icon,
  Github01Icon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { siteConfig } from "@/config/site";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Menu() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigate = async (href: string) => {
    if (!href) return;
    setLoading(true);

    if (href.includes("mailto:")) {
      window.location.href = href;
    } else if (href.includes("//")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href === pathname) {
      router.replace(href);
    } else {
      router.push(href);
    }

    setLoading(false);
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setOpen(false);
  };

  useEffect(() => {
    if (!mounted) return;

    // Prefetch routes
    router.prefetch("/writing");
    router.prefetch("/work");

    // Toggle the menu when ⌘K or Ctrl+K is pressed
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [mounted, router]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Go to..." />
        <Command.List>
          {loading && (
            <Command.Loading>
              <div className="flex items-center justify-center p-4">
                <HugeiconsIcon
                  icon={Loading03Icon}
                  size={24}
                  className="animate-spin"
                />
              </div>
            </Command.Loading>
          )}

          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Pages">
            <Command.Item onSelect={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Home01Icon} size={16} />
                <span>Home</span>
              </div>
            </Command.Item>
            <Command.Item onSelect={() => navigate("/writing")}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={File01Icon} size={16} />
                <span>Writing</span>
              </div>
            </Command.Item>
            <Command.Item onSelect={() => navigate("/work")}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Folder01Icon} size={16} />
                <span>Work</span>
              </div>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Appearance">
            <Command.Item onSelect={toggleTheme}>
              <div className="flex items-center gap-2">
                {theme === "dark" ? (
                  <HugeiconsIcon icon={Sun01Icon} size={16} />
                ) : (
                  <HugeiconsIcon icon={Moon02Icon} size={16} />
                )}
                <span>Switch theme</span>
              </div>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Contact">
            <Command.Item onSelect={() => navigate(siteConfig.links.twitter)}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={NewTwitterIcon} size={16} />
                <span>X</span>
              </div>
            </Command.Item>
            <Command.Item onSelect={() => navigate(siteConfig.links.github)}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Github01Icon} size={16} />
                <span>GitHub</span>
              </div>
            </Command.Item>
            <Command.Item onSelect={() => navigate(siteConfig.links.linkedin)}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Linkedin01Icon} size={16} />
                <span>LinkedIn</span>
              </div>
            </Command.Item>
            <Command.Item onSelect={() => navigate(siteConfig.links.email)}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Mail01Icon} size={16} />
                <span>Email</span>
              </div>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>

      <nav
        className={`${
          isHome ? "w-12" : "w-28"
        } fixed bottom-6 left-6 top-auto z-50 md:bottom-auto md:left-8 md:top-8 print:hidden`}
      >
        <div className="relative flex h-12 gap-2">
          {!isHome && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="absolute left-0 flex items-center justify-center size-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-110 active:scale-90 transition-all shadow-sm will-change-transform"
                  aria-label="Go home"
                >
                  <HugeiconsIcon icon={Home01Icon} size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => setOpen((open) => !open)}
                className={`absolute rounded-full transition-all duration-250 ease-out flex items-center justify-center size-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-110 active:scale-90 shadow-sm will-change-transform ${
                  !isHome ? "left-14 delay-50" : "left-0 delay-300"
                }`}
                aria-label="Open menu"
              >
                <HugeiconsIcon icon={CommandHugeIcon} size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Menu</TooltipContent>
          </Tooltip>
        </div>
      </nav>
    </>
  );
}
