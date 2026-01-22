import { siteConfig } from "@/config/site";

export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p>
        I build AI and web3 products with deep care for how they work and how
        they feel.
      </p>
      <p className="mt-3">
        I combine engineering, product thinking, and design to create clean,
        functional experiences that solve real problems.
      </p>
      <p className="mt-3">
        8x international hackathon winner | Building from anywhere
      </p>
      <p className="mt-3">
        Interested in working together?{" "}
        <a
          href="https://cal.com/samueldanso/book-a-call"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline transition-all duration-200"
        >
          Book a call
        </a>{" "}
        or{" "}
        <a
          href={siteConfig.links.email}
          className="underline hover:no-underline transition-all duration-200"
        >
          send an email
        </a>
        .
      </p>
    </section>
  );
}
