"use client";

import {
  ArrowUpRight03Icon,
  Calendar03Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Stagger, StaggerItem } from "@/components/ui/animate";
import { siteConfig } from "@/config/site";

interface HeroProps {
  name: string;
  title: string;
  isActive: boolean;
}

export function Hero({ name, title, isActive }: HeroProps) {
  return (
    <Stagger className="space-y-5 sm:space-y-6" stagger={0.08}>
      <StaggerItem>
        <header className="flex items-center gap-4">
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <h1 className="text-[1.625rem] leading-tight font-display font-medium text-foreground">
              {name}
            </h1>
            <p className="text-body text-muted-foreground font-title">
              {title}
            </p>
            {isActive && (
              <div className="mt-1.5 flex items-center gap-2">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-emerald-500 animate-pulse"
                  aria-hidden
                />
                <span className="text-caption text-muted-foreground">
                  Available for work
                </span>
              </div>
            )}
          </div>
        </header>
      </StaggerItem>

      <StaggerItem>
        <section className="text-body text-muted-foreground text-pretty space-y-3">
          <p>
            I build AI and web3 products with a focus on how they work and
            feel—blending engineering, product thinking, and user experience to
            solve real problems.
          </p>
          <p>
            Previously Founding Engineer at{" "}
            <a
              href="https://necta-fi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group/necta inline-flex items-baseline gap-0.5 font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60 transition-colors duration-200"
            >
              Necta Finance
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={13}
                strokeWidth={2}
                className="translate-y-[1px] text-muted-foreground group-hover/necta:text-foreground/70 group-hover/necta:-translate-y-0.5 transition-all duration-200"
              />
            </a>
            . 8X international hackathon winner.
          </p>
        </section>
      </StaggerItem>

      <StaggerItem>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-2">
          <a
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-item-title font-title font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60 transition-colors duration-200"
          >
            <HugeiconsIcon
              icon={Calendar03Icon}
              size={15}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground"
            />
            <span>Book a call</span>
          </a>
          <span className="text-border select-none">/</span>
          <a
            href={siteConfig.links.email}
            className="inline-flex items-center gap-1.5 text-item-title font-title font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/60 transition-colors duration-200"
          >
            <HugeiconsIcon
              icon={Mail01Icon}
              size={15}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground"
            />
            <span>Send an email</span>
          </a>
        </div>
      </StaggerItem>
    </Stagger>
  );
}
