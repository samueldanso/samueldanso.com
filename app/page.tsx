import { Awards } from "@/components/sections/awards";
import { ContactMe } from "@/components/sections/contact-me";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OrbitingAnimation } from "@/components/sections/orbiting-animation";
import { SelectedWork } from "@/components/sections/selected-work";
import { Writing } from "@/components/sections/writing";
import { DashedDivider } from "@/components/ui/grid-patterns";

export default function Home() {
  return (
    <section className="container space-y-12 py-3 sm:space-y-16 md:py-4">
      <Hero name="Samuel Danso" title="Full-Stack Engineer" isActive={false} />

      <Experience />
      <SelectedWork />
      <Awards />
      <Writing />

      <DashedDivider className="mt-4" />
      <div className="pt-4 sm:pt-6">
        <OrbitingAnimation />
      </div>
      <ContactMe />
    </section>
  );
}
