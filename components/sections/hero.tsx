import Image from "next/image"
import Link from "next/link"
import {
	Calendar03Icon,
	Mail01Icon,
	Linkedin01Icon,
	Github01Icon,
	NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { siteConfig } from "@/config/site"

interface HeroProps {
	name: string
	title: string
	isActive: boolean
}

const socialLinks = [
	{
		href: siteConfig.links.github,
		label: "GitHub",
		icon: Github01Icon,
	},
	{
		href: siteConfig.links.twitter,
		label: "X",
		icon: NewTwitterIcon,
	},
	{
		href: siteConfig.links.linkedin,
		label: "LinkedIn",
		icon: Linkedin01Icon,
	},
]

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
					<h1 className="text-xl font-title text-foreground leading-tight tracking-tight">
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
					I build AI and web3 products with a focus on how they work and feel—blending
					engineering, product thinking, and user experience to solve real problems.
				</p>
				<p className="mt-3">8X International hackathon winner.</p>
				{/* <p className="mt-3">Available for roles or collaborations.</p> */}
			</section>

			{/* Contact & Social Links */}
			<dl className="grid grid-cols-12 gap-8 gap-y-2 sm:gap-y-4 mt-4 pb-6 sm:pb-7">
				<dt className="col-span-12 sm:col-span-4 pt-0">
					<h3 className="font-title text-[17px] font-medium text-foreground">Connect</h3>
				</dt>
				<dd className="col-span-12 sm:col-span-8 pt-0">
					<div className="flex flex-col gap-2">
						{/* CTAs: Book a call, Send an email */}
						<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
							<a
								href="https://cal.com/samueldanso/15m"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-1.5 font-title text-[17px] font-normal text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
							>
								<HugeiconsIcon
									icon={Calendar03Icon}
									size={16}
									strokeWidth={2}
									className="shrink-0"
								/>
								<span>Book a call</span>
							</a>
							<a
								href={siteConfig.links.email}
								className="group inline-flex items-center gap-1.5 font-title text-[17px] font-normal text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
							>
								<HugeiconsIcon
									icon={Mail01Icon}
									size={16}
									strokeWidth={2}
									className="shrink-0"
								/>
								<span>Send an email</span>
							</a>
						</div>
						{/* Social: GitHub, X, LinkedIn on one line */}
						<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
							{socialLinks.map(({ href, label, icon }) => (
								<Link
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-1.5 font-title text-[17px] font-normal text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
								>
									<HugeiconsIcon
										icon={icon}
										size={16}
										strokeWidth={2}
										className="shrink-0"
									/>
									<span>{label}</span>
								</Link>
							))}
						</div>
					</div>
				</dd>
			</dl>
		</div>
	)
}
