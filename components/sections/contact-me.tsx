import { ShellSection } from '@/components/ui/shell'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

function ContactLink({
	href,
	title,
	website,
	email,
}: {
	email?: string
	href?: string
	title: string
	website?: string
}) {
	return (
		<span className="block items-center gap-4">
			{website && <p className="text-muted-foreground text-[14px]">{website}</p>}
			{href && (
				<Link
					className="text-foreground hover:text-primary transition-opacity duration-150 text-[14px]"
					href={href}
					rel="noopener noreferrer"
					target="_blank"
				>
					{title}{' '}
					<svg
						className="inline-block h-3 w-3"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="img"
					>
						<path
							d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Link>
			)}
			{email && (
				<p className="text-foreground hover:text-primary transition-opacity duration-150 text-[14px]">
					{title}
				</p>
			)}
		</span>
	)
}

export function ContactMe() {
	return (
		<ShellSection index={5} title="Connect">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<ContactLink href={siteConfig.links.github} title="samueldanso" website="GitHub" />

				<ContactLink
					href={siteConfig.links.linkedin}
					title="samueldanso"
					website="LinkedIn"
				/>
				<ContactLink
					email="me.samueldanso@gmail.com"
					title="me.samueldanso@gmail.com"
					website="Email"
				/>
				<ContactLink href={siteConfig.links.twitter} title="samueldans0" website="X" />
				<ContactLink
					href={siteConfig.links.discord}
					title="samueldanso"
					website="Discord"
				/>
				<ContactLink
					href={siteConfig.links.telegram}
					title="samueldanso"
					website="Telegram"
				/>
			</div>
		</ShellSection>
	)
}
