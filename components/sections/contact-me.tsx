import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
  SectionContent,
  SectionGrid,
  SectionTitle,
} from "@/components/ui/section-grid";
import { siteConfig } from "@/config/site";

const contactItems = [
  {
    href: siteConfig.links.email,
    label: "Get in touch",
    subtitle: "Send me an email",
    external: false,
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    subtitle: "Connect with me",
    external: true,
  },
  {
    href: siteConfig.links.github,
    label: "GitHub",
    subtitle: "See my work",
    external: true,
  },
  {
    href: siteConfig.links.twitter,
    label: "X",
    subtitle: "Follow me",
    external: true,
  },
];

export function ContactMe() {
  return (
    <SectionGrid>
      <SectionTitle>Contact</SectionTitle>
      <SectionContent />
      <div className="contents">
        <dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0" />
        <dd className="col-span-12 sm:col-span-8 border-none pt-0">
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-2 sm:gap-y-8">
            {contactItems.map(({ href, label, subtitle, external }) => (
              <div key={label}>
                <Link
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group inline-flex items-baseline gap-1 font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
                >
                  {label}
                  <HugeiconsIcon
                    icon={ArrowUpRight03Icon}
                    size={14}
                    strokeWidth={2}
                    className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
                  />
                </Link>
                <p className="pt-1 text-[15px] text-muted-foreground">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </dd>
      </div>
    </SectionGrid>
  );
}
