import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { SelectedWork } from "@/components/sections/selected-work";
import { Awards } from "@/components/sections/awards";
import { Writing } from "@/components/sections/writing";
import { ContactMe } from "@/components/sections/contact-me";
import { OrbitingAnimation } from "@/components/sections/orbiting-animation";

export default function Home() {
  return (
    <section className="container space-y-12 py-3 sm:space-y-16 md:py-4">
      <Hero name="Samuel Danso" title="Full-stack Engineer" isActive={false} />

      <Experience />
      <SelectedWork />
      <Awards />
      <Writing />

      <div className="pt-8 sm:pt-12">
        <OrbitingAnimation />
      </div>
      <ContactMe />
    </section>
  );
}
