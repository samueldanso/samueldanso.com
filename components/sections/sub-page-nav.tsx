"use client";

import { CommandIcon as CommandHugeIcon, Home01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { openMenu } from "@/components/sections/menu";
import { ThemeToggle } from "@/components/theme-toggle";

export function SubPageNav() {
  return (
    <div className="hidden md:flex items-center gap-1">
      <Link
        href="/"
        aria-label="Go home"
        className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
      >
        <HugeiconsIcon icon={Home01Icon} size={14} strokeWidth={2} />
      </Link>
      <button
        type="button"
        aria-label="Open command menu"
        title="Open menu (⌘K)"
        onClick={openMenu}
        className="inline-flex items-center gap-1 h-8 px-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
      >
        <HugeiconsIcon icon={CommandHugeIcon} size={14} strokeWidth={2} />
        <span className="text-sm font-medium">K</span>
      </button>
      <ThemeToggle />
    </div>
  );
}
