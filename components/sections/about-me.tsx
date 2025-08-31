export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p className="leading-relaxed">
        I build next-generation blockchain and AI products for the future of the
        web and frontier tech.
      </p>
      <p className="leading-relaxed mt-4">
        Beyond the screen, I enjoy traveling and exploring the world with a
        nomadic spirit.
      </p>
      <p className="leading-relaxed mt-4">
        Check out my{" "}
        <a
          href="https://read.cv/samueldanso"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline transition-all duration-200"
        >
          Resume
        </a>{" "}
        to learn more about me. You can also reach out to me on{" "}
        <a
          href="https://x.com/samueldans0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline transition-all duration-200"
        >
          X
        </a>{" "}
        or see more of my work on{" "}
        <a
          href="https://github.com/samueldanso"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline transition-all duration-200"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
