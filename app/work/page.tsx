import { ArrowRight02Icon, Github01Icon, Link01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { allWorks } from "content-collections"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function WorkPage() {
	const sortedProjects = [...allWorks].sort((a, b) => a.sort - b.sort)

	return (
		<div className="container">
			{/* Hero Section */}
			<section className="pt-4 pb-10 sm:pt-6 sm:pb-14">
				<div className="mb-6">
					<Link
						href="/"
						className="text-muted-foreground font-medium text-sm no-underline hover:underline"
					>
						<span className="text-muted-foreground/60">~</span> Home
					</Link>
				</div>
				<h1 className="font-title text-2xl mb-1">All Projects</h1>
				<p className="text-muted-foreground">
					A curated record of my work, experiments, and shipped projects.
				</p>
			</section>

			{/* Project Cards */}
			<div className="space-y-8 pb-12">
				{sortedProjects.map((project) => (
					<div
						key={project._meta.path}
						className="border border-dashed border-border rounded-xl p-4 sm:p-6 transition-colors hover:bg-muted/40"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{project.image && (
								<Link
									href={`/work/${project._meta.path}`}
									className="block overflow-hidden rounded-lg"
								>
									<Image
										src={project.image}
										alt={project.title}
										width={600}
										height={400}
										sizes="(max-width: 768px) 100vw, 50vw"
										className="rounded-lg w-full aspect-video object-cover transition-transform duration-300 hover:scale-[1.02]"
									/>
								</Link>
							)}

							<div className="flex flex-col justify-center">
								<div className="flex items-center gap-2 mb-2">
									<h2 className="font-title text-xl font-medium text-foreground">
										{project.title}
									</h2>
									<a
										href={project.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Visit ${project.title}`}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										<HugeiconsIcon
											icon={Link01Icon}
											size={16}
											strokeWidth={2}
										/>
									</a>
									{project.source && (
										<a
											href={project.source}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${project.title} source code`}
											className="text-muted-foreground hover:text-foreground transition-colors"
										>
											<HugeiconsIcon
												icon={Github01Icon}
												size={16}
												strokeWidth={2}
											/>
										</a>
									)}
								</div>

								<p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
									{project.description}
								</p>

								<Link
									href={`/work/${project._meta.path}`}
									className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors mb-4"
								>
									<span>View case study</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										size={14}
										strokeWidth={2}
										className="shrink-0"
									/>
								</Link>

								{project.stack && project.stack.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{project.stack.map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="rounded-full font-normal"
											>
												{tech}
											</Badge>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				))}

				{sortedProjects.length === 0 && (
					<div className="text-center py-12 text-muted-foreground">
						<p>No work yet. Check back soon!</p>
					</div>
				)}
			</div>
		</div>
	)
}
