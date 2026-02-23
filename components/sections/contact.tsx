import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { siteConfig } from "@/config/site";
import { FadeUp } from "@/components/ui/animate";

const contactItems = [
  {
    href: siteConfig.links.github,
    label: "GitHub",
    description: "See my work",
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    description: "Connect with me",
  },
  {
    href: siteConfig.links.twitter,
    label: "X / Twitter",
    description: "Follow me",
  },
  {
    href: "/resume/resume.pdf",
    label: "Resume",
    description: "View my CV",
  },
];

export function Contact() {
  return (
    <FadeUp>
      <div className="flex flex-col pt-8 pb-4 sm:pt-10 sm:pb-5">
        <div
          className="-mx-7 sm:-mx-6 border-t border-dashed border-border mb-5 sm:mb-6"
          aria-hidden="true"
        />
        <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-6">
          Connect
        </h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {contactItems.map(({ href, label, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5"
            >
              <span className="inline-flex items-baseline gap-1 text-item-title font-title font-medium text-foreground underline decoration-border underline-offset-4 group-hover:decoration-foreground/60 transition-all duration-200">
                {label}
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  size={13}
                  strokeWidth={2}
                  className="translate-y-[1px] text-muted-foreground group-hover:text-foreground/70 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </span>
              <span className="text-caption text-muted-foreground">
                {description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
