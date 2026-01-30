import { ArrowRight02Icon, ArrowUpRight03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { allWritings } from "content-collections"
import Link from "next/link"
import { WorkListItem } from "@/components/sections/work-list-item"
import { SectionContent, SectionGrid, SectionTitle } from "@/components/ui/section-grid"

function formatDate(date: Date): string {
	return Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date)
}

export function Writing() {
	const sortedPosts = [...allWritings].sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	})
	const recentPosts = sortedPosts.slice(0, 5)

	if (recentPosts.length === 0) {
		return null
	}

	return (
		<SectionGrid>
			<SectionTitle>Writing</SectionTitle>
			<SectionContent />
			{recentPosts.map((post, index) => (
				<WorkListItem key={post._meta.path} title={post.title} image={post.image}>
					<dt
						className={`col-span-12 sm:col-span-4 sm:pt-0.5 ${index > 0 ? "mt-4 border-none pt-0 sm:mt-0" : ""}`}
					>
						<div className="flex items-center gap-2">
							<h3 className="text-muted-foreground text-[15px] font-normal shrink-0 transition-colors duration-200 group-hover/row:text-foreground/60">
								<time dateTime={post.date}>{formatDate(new Date(post.date))}</time>
							</h3>
							<div className="hidden sm:block min-w-[20px] flex-grow border-b border-dashed border-border h-[1px] transition-colors duration-200 group-hover/row:border-muted-foreground/30" />
						</div>
					</dt>
					<dd
						className={`col-span-12 sm:col-span-8 ${index > 0 ? "border-none pt-0" : ""}`}
					>
						<Link
							href={`/writing/${post._meta.path}`}
							className="group font-title text-[18px] font-medium text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-all duration-200 group-hover/row:translate-x-0.5"
						>
							{post.title}
							<HugeiconsIcon
								icon={ArrowUpRight03Icon}
								size={14}
								strokeWidth={2}
								className="inline-block ml-1 translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
							/>
						</Link>
					</dd>
				</WorkListItem>
			))}
			<div className="contents">
				<dt className="col-span-12 sm:col-span-4 mt-4 border-none pt-0 sm:mt-0"></dt>
				<dd className="col-span-12 sm:col-span-8 border-none pt-0">
					<Link
						href="/writing"
						className="group inline-flex items-baseline gap-1 text-muted-foreground font-medium underline decoration-muted-foreground/40 hover:decoration-foreground/80 transition-colors"
					>
						See all posts
						<HugeiconsIcon
							icon={ArrowRight02Icon}
							size={14}
							strokeWidth={2}
							className="translate-y-[2px] text-muted-foreground group-hover:text-foreground/80 group-hover:-translate-y-0.5 transition-all"
						/>
					</Link>
				</dd>
			</div>
		</SectionGrid>
	)
}
