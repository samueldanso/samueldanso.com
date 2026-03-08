"use client"

import { Icons } from "@/components/icons"
import { openMenu } from "@/components/sections/menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { CommandIcon as CommandHugeIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface HeaderProps {
	name: string
	title: string
	isActive: boolean
}

export function Header({ name, title, isActive }: HeaderProps) {
	return (
		<header className="flex items-start justify-between gap-4 pb-4">
			<div className="flex flex-col items-start gap-2">
				{/* Profile image — hidden, uncomment to restore
        <Image
          src="/icons/profile-icon.png"
          alt={name}
          width={80}
          height={80}
          className="size-20 object-cover rounded-md border border-border"
          loading="lazy"
        />
        */}
				<div className="flex flex-col items-start gap-0.5">
					<h1 className="text-[24px] md:text-[26px] lg:text-[28px] leading-tight font-display font-medium text-foreground">
						{name}
					</h1>
					<p className="text-sm text-muted-foreground font-sans">{title}</p>
					{isActive && (
						<div className="mt-1 flex items-center gap-2">
							<span
								className="size-1.5 shrink-0 rounded-full bg-emerald-500 animate-pulse"
								aria-hidden
							/>
							<span className="text-caption text-muted-foreground">
								Available for work
							</span>
						</div>
					)}
				</div>
			</div>

			<div className="flex items-center mt-1">
				<button
					type="button"
					className="hidden md:inline-flex items-center gap-1 h-8 px-2 mr-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
					aria-label="Open command menu"
					title="Open menu (⌘K)"
					onClick={openMenu}
				>
					<HugeiconsIcon icon={CommandHugeIcon} size={14} strokeWidth={2} />
					<span className="text-sm font-medium">K</span>
				</button>

				<Button
					asChild
					variant="ghost"
					size="icon"
					aria-label="X / Twitter"
					title="X / Twitter"
				>
					<a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
						<Icons.twitter className="size-4 text-foreground" />
					</a>
				</Button>

				<Button asChild variant="ghost" size="icon" aria-label="GitHub" title="GitHub">
					<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
						<Icons.gitHub className="size-5 text-foreground" />
					</a>
				</Button>

				<Button asChild variant="ghost" size="icon" aria-label="LinkedIn" title="LinkedIn">
					<a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
						<Icons.linkedIn className="size-5 text-foreground" />
					</a>
				</Button>

				<ThemeToggle />
			</div>
		</header>
	)
}
