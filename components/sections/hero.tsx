import Image from "next/image";
import { siteConfig } from "@/config/site";

interface HeroProps {
  name: string;
  title: string;
  isActive: boolean;
}

export function Hero({ name, title, isActive }: HeroProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <header className="flex items-center gap-4 font-sans">
        <div className="relative size-12 flex-shrink-0">
          <Image
            alt="Profile"
            className="rounded-full object-cover object-[center_30%]"
            fill
            src="/profile-icon.png"
            sizes="96px"
            priority
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h1 className="text-xl font-medium leading-tight tracking-tight text-foreground">
            {name}
          </h1>
          <p className="text-[15px] font-normal text-muted-foreground">
            {title}
          </p>
          {isActive && (
            <div className="mt-1 flex items-center gap-2">
              <span
                className="size-2 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
              <span className="text-sm text-muted-foreground">
                available for work
              </span>
            </div>
          )}
        </div>
      </header>

      <section className="font-sans">
        <div className="prose prose-zinc dark:prose-invert text-base text-pretty max-w-none">
          <p>
          I build AI-powered, web3, and consumer products with care for how they work and feel—blending engineering, product thinking, and design to ship experiences that solve real problems.
          </p>
          <p className="mt-3">8× international hackathon winner</p>
          <p className="mt-3">
            Currently available for new projects.{" "}
            <a
              href="https://cal.com/samueldanso/book-a-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border hover:decoration-foreground/40 transition-colors"
            >
              Book a call
            </a>{" "}
            or{" "}
            <a
              href={siteConfig.links.email}
              className="text-foreground underline decoration-border hover:decoration-foreground/40 transition-colors"
            >
              send an email
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
