import { AboutMe } from "@/components/sections/about-me";
import { ContactMe } from "@/components/sections/contact-me";
import { OrbitingAnimation } from "@/components/sections/orbiting-animation";
import { ProfileHeader } from "@/components/sections/profile-header";
import { Projects } from "@/components/sections/projects";
import { RecentPosts } from "@/components/sections/recent-posts";
import { WorkExperience } from "@/components/sections/work-experience";

export default function Home() {
  return (
    <section className="container space-y-12 py-3 sm:space-y-16 md:py-4">
      {/* Profile header + about - flows naturally, then two-column sections start */}
      <div className="space-y-6 sm:space-y-8">
        <ProfileHeader
          name="Samuel Danso"
          title="Full-Stack Engineer — AI & Web3"
          isActive={false}
        />
        <AboutMe />
      </div>

      <WorkExperience />
      <Projects />
      <RecentPosts />


      <div className="pt-8 sm:pt-12">
        <OrbitingAnimation />
      </div>
      <ContactMe />
    </section>
  );
}
