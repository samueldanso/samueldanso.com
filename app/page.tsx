import { Awards } from "@/components/sections/awards"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Highlights } from "@/components/sections/highlights"
import { OrbitingAnimation } from "@/components/sections/orbiting-animation"
import { SelectedWork } from "@/components/sections/selected-work"
import { Writing } from "@/components/sections/writing"
import { DashedDivider } from "@/components/ui/grid-patterns"

export default function Home() {
	return (
		<section className="container py-3 md:py-4">
			<Hero name="Samuel Danso" title="Full-Stack Product Engineer" isActive={false} />
			<SelectedWork />
			<Experience />
			<Writing />
			<Awards />
			<Highlights />

			<DashedDivider className="mt-4" />
			<div className="pt-4 sm:pt-6">
				<OrbitingAnimation />
			</div>
		</section>
	)
}
