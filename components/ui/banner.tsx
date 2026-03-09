import { LinesBG } from "@/components/ui/grid-patterns"

export function Banner() {
	return (
		<section className="container py-6 md:py-8 min-h-screen flex flex-col justify-center">
			<div className="flex flex-col gap-6 pb-8">
				<div className="flex flex-col gap-0.5">
					<h2 className="text-[24px] md:text-[26px] lg:text-[28px] leading-tight font-display font-medium text-foreground">
						Samuel Danso
					</h2>
					<p className="text-[15px] text-muted-foreground font-sans">Software Engineer</p>
				</div>

				<h1 className="text-[22px] md:text-[24px] leading-tight font-display font-medium text-muted-foreground">
					Building{" "}
					<span className="text-foreground">AI‑Native</span>
					{" "}&#38;{" "}
					<span className="text-foreground">Onchain</span>
					{" "}Products
				</h1>
			</div>
			<LinesBG className="-mx-4 sm:-mx-5" />
		</section>
	)
}
