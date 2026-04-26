"use client";

import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allExperiences } from "content-collections";
import { cn } from "@/lib/utils";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";

const COMPANY_ICONS: Record<string, string> = {
  Necta: "/icons/necta-icon.svg",
};

function CompanyIcon({ company, href }: { company: string; href?: string }) {
  const iconSrc = COMPANY_ICONS[company];

  const content = iconSrc ? (
    <Image
      src={iconSrc}
      alt={company}
      width={20}
      height={20}
      className="size-4 rounded-sm object-contain"
    />
  ) : (
    <span className="text-[11px] font-medium text-muted-foreground">
      {company.charAt(0).toUpperCase()}
    </span>
  );

  const containerClass =
    "size-7 rounded-sm border border-dashed border-border/70 bg-muted/30 flex items-center justify-center shrink-0 transition-colors duration-200";

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClass}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </Link>
    );
  }

  return <div className={containerClass}>{content}</div>;
}

interface ExperienceCardProps {
  role: string;
  company: string;
  companyHref?: string;
  year: string;
  bullets?: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

function ExperienceCard({
  role,
  company,
  companyHref,
  year,
  bullets,
  isFirst,
  isLast,
}: ExperienceCardProps) {
  const hasBullets = bullets && bullets.length > 0;
  const [isOpen, setIsOpen] = useState(isFirst && hasBullets);

  return (
    <div className="flex gap-3 group/card transition-opacity duration-150 group-hover/experience:opacity-40 hover:!opacity-100 py-2">
      <div className="flex flex-col items-center">
        <CompanyIcon company={company} href={companyHref} />
        {!isLast && (
          <div className="w-px bg-border/50 flex-1 min-h-4 mt-1.5" />
        )}
      </div>

      <button
        type="button"
        disabled={!hasBullets}
        className={cn(
          "flex-1 pb-2 text-left w-full bg-transparent",
          hasBullets && "cursor-pointer",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="text-[14px] text-muted-foreground/70 font-medium mb-0.5">
          {role}
        </p>

        <div className="flex w-full items-center gap-2">
          {companyHref ? (
            <a
              href={companyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-1 text-item-title font-title font-medium text-foreground whitespace-nowrap"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="border-b border-dashed border-foreground/60 group-hover/title:border-foreground transition-colors duration-200">
                {company}
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={13}
                strokeWidth={2}
                className="text-muted-foreground group-hover/title:text-foreground/70 group-hover/title:-translate-y-0.5 transition-all duration-200"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-item-title font-title font-medium text-foreground whitespace-nowrap">
              <span className="border-b border-dashed border-foreground/60">
                {company}
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={13}
                strokeWidth={2}
                className="text-muted-foreground"
              />
            </span>
          )}
          <div className="flex-1 border-b border-dashed border-border/50 min-w-4" />
          <span className="text-caption text-muted-foreground whitespace-nowrap">
            {year}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && hasBullets && (
            <motion.div
              key="bullets"
              initial={{ height: 0, opacity: 0, y: -6 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -6 }}
              transition={{ ease: "easeOut", duration: 0.125 }}
              className="overflow-hidden"
            >
              <ul className="mt-2 space-y-1 pl-0">
                {bullets?.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-caption text-muted-foreground leading-relaxed flex gap-1.5"
                  >
                    <span className="text-muted-foreground/40 shrink-0 mt-0.5">
                      •
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

export function Experience() {
  const experiences = [...allExperiences].sort((a, b) => {
    const ay = Number(a.year.split(" - ")[0]);
    const by = Number(b.year.split(" - ")[0]);
    if (Number.isFinite(ay) && Number.isFinite(by)) return by - ay;
    return b.year.localeCompare(a.year);
  });

  return (
    <SectionGrid>
      <SectionTitle>Experience</SectionTitle>
      <SectionContent />
      <div className="col-span-12 group/experience flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.year}-${experience.company}`}
            role={experience.role}
            company={experience.company}
            companyHref={experience.companyHref || undefined}
            year={experience.year}
            bullets={experience.bullets}
            isFirst={index === 0}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </SectionGrid>
  );
}
