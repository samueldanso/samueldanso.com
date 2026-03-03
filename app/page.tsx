import { Awards } from "@/components/sections/awards"
import { Experience } from "@/components/sections/experience"
import { Header } from "@/components/sections/header"
import { About } from "@/components/sections/about"
import { Highlights } from "@/components/sections/highlights"
import { SelectedWork } from "@/components/sections/selected-work"
import { Writing } from "@/components/sections/writing"

export default function Home() {
	return (
		<section className="container py-6 md:py-8">
			<Header name="Samuel Danso" title="Full-Stack Engineer" isActive={false} />
			<About />
			<SelectedWork />
			<Experience />
			<Writing />
			<Awards />
			<Highlights />
		</section>
	)
}
