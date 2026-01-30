import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { siteConfig } from "@/config/site";
import {
  SectionGrid,
  SectionTitle,
  SectionContent,
} from "@/components/ui/section-grid";

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
                  className="inline-flex items-center gap-0.5 font-medium text-foreground underline decoration-[1.5px] underline-offset-[2.5px] decoration-border hover:decoration-foreground/40 transition-colors"
                >
                  {label}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="inline shrink-0"
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
