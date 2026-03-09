"use client"

import { ArrowUpRight03Icon, Calendar03Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function About() {
	return (
		<div className="space-y-5 sm:space-y-6 pt-6 pb-8 md:pb-16">
			<section className="text-body text-muted-foreground text-pretty space-y-3">
				<p>
					I build{" "}
					<span className="text-foreground">AI-native</span> and{" "}
					<span className="text-foreground">onchain products</span>{" "}
					end-to-end — engineering with a taste for how software works and feels right.
				</p>
				<p>
					Previously Founding Engineer at{" "}
					<a
						href="https://necta-fi.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="group/necta inline-flex items-center gap-1 mx-0.5 translate-y-0.5"
					>
						<Image
							src="/icons/necta-icon.svg"
							alt="Necta Finance"
							width={16}
							height={16}
							className="rounded-sm"
						/>
						<span className="font-title font-medium text-[15px] text-foreground border-b border-dashed border-foreground/60 group-hover/necta:border-foreground transition-colors duration-200">
							Necta Finance
						</span>
						<HugeiconsIcon
							icon={ArrowUpRight03Icon}
							size={12}
							strokeWidth={2}
							className="text-muted-foreground group-hover/necta:text-foreground/70 group-hover/necta:-translate-y-0.5 transition-all duration-200"
						/>
					</a>
					. 8x international hackathon winner.
				</p>
			</section>

			<div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-2">
				<a
					href={siteConfig.links.cal}
					target="_blank"
					rel="noopener noreferrer"
					className="group/cal inline-flex items-center gap-1.5 text-[15px] font-title font-medium text-foreground"
				>
					<HugeiconsIcon
						icon={Calendar03Icon}
						size={15}
						strokeWidth={2}
						className="shrink-0 text-muted-foreground"
					/>
					<span className="border-b border-dashed border-foreground/60 group-hover/cal:border-foreground transition-colors duration-200">
						Book a call
					</span>
				</a>
				<span className="text-border select-none">/</span>
				<a
					href={siteConfig.links.email}
					className="group/email inline-flex items-center gap-1.5 text-[15px] font-title font-medium text-foreground"
				>
					<HugeiconsIcon
						icon={Mail01Icon}
						size={15}
						strokeWidth={2}
						className="shrink-0 text-muted-foreground"
					/>
					<span className="border-b border-dashed border-foreground/60 group-hover/email:border-foreground transition-colors duration-200">
						Send an email
					</span>
				</a>
			</div>
		</div>
	)
}
