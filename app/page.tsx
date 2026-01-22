import { AboutMe } from "@/components/sections/about-me";
import { ContactMe } from "@/components/sections/contact-me";
import { OrbitingAnimation } from "@/components/sections/orbiting-animation";
import { ProfileHeader } from "@/components/sections/profile-header";
import { Projects } from "@/components/sections/projects";
import { RecentPosts } from "@/components/sections/recent-posts";
import { WorkExperience } from "@/components/sections/work-experience";

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12 mt-6">
      <ProfileHeader
        name="Samuel Danso"
        title="Full-Stack Engineer"
        isActive={false}
      />
      <ContactMe />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <RecentPosts />
      <OrbitingAnimation />
    </section>
  );
}
