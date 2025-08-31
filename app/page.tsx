import { AboutMe } from '@/components/sections/about-me'
import { ContactMe } from '@/components/sections/contact-me'
import { OrbitingAnimation } from '@/components/sections/orbiting-animation'
import { ProfileHeader } from '@/components/sections/profile-header'
import { Projects } from '@/components/sections/projects'
import { WorkExperience } from '@/components/sections/work-experience'

export default function Home() {
	return (
		<section className="items-center gap-8 container py-3 md:py-4 space-y-12 mt-6">
			<ProfileHeader
				name="Samuel Danso"
				username="samueldanso"
				title="Software Engineer"
				isActive={false}
			/>
			<AboutMe />
			<WorkExperience />
			<Projects />
			<OrbitingAnimation />
			<ContactMe />
		</section>
	)
}
