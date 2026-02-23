import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { SelectedWork } from "@/components/sections/selected-work";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <section className="container py-6 md:py-8">
      <Hero name="Samuel Danso" title="Full-Stack Engineer" isActive={false} />
      <SelectedWork />
      {/* <Experience /> */}
      <Writing />
      <Awards />
      <Highlights />
      <Contact />
    </section>
  );
}
