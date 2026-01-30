import { Calendar03Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { siteConfig } from "@/config/site"

interface HeroProps {
	name: string
	title: string
	isActive: boolean
}

export function Hero({ name, title, isActive }: HeroProps) {
	return (
		<div className="space-y-4 sm:space-y-6">
			<header className="flex items-center gap-4">
				<div className="relative size-12 shrink-0">
					<Image
						alt="Profile"
						className="rounded-full object-cover object-[center_30%]"
						fill
						src="/profile-icon.png"
						sizes="96px"
						priority
					/>
				</div>
				<div className="flex min-w-0 flex-1 flex-col gap-1">
					<h1 className="text-xl font-title font-medium leading-tight tracking-tight">
						{name}
					</h1>
					<p className="text-[15px] text-muted-foreground">{title}</p>
					{isActive && (
						<div className="mt-1 flex items-center gap-2">
							<span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden />
							<span className="text-sm text-muted-foreground">
								available for work
							</span>
						</div>
					)}
				</div>
			</header>

			<section className="text-muted-foreground text-pretty">
				<p>
					I build AI-powered, web3, and consumer products with care for how they work and
					feel—blending engineering, product thinking, and design to ship experiences that
					solve real problems.
				</p>
				<p className="mt-3">8× international hackathon winner</p>
				<p className="mt-3">
					Currently available for new projects or roles.{" "}
					<a
						href="https://cal.com/samueldanso/15m"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-baseline gap-1 text-foreground underline decoration-foreground/40 hover:text-muted-foreground hover:decoration-muted-foreground/40 transition-colors"
					>
						<HugeiconsIcon
							icon={Calendar03Icon}
							size={14}
							strokeWidth={2}
							className="translate-y-[2px] group-hover:-translate-y-0.5 transition-transform"
						/>
						<span className="font-title text-[17px]">Book a quick call</span>
					</a>{" "}
					or{" "}
					<a
						href={siteConfig.links.email}
						className="group inline-flex items-baseline gap-1 text-foreground underline decoration-foreground/40 hover:text-muted-foreground hover:decoration-muted-foreground/40 transition-colors"
					>
						<HugeiconsIcon
							icon={Mail01Icon}
							size={14}
							strokeWidth={2}
							className="translate-y-[2px] group-hover:-translate-y-0.5 transition-transform"
						/>
						<span className="font-title text-[17px]">send an email</span>
					</a>
					.
				</p>
			</section>
		</div>
	)
}
