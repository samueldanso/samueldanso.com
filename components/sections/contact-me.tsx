import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ContactMe() {
  return (
    <div className="flex items-center gap-2 text-[14px] font-medium text-foreground">
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline transition-colors"
      >
        GitHub
      </Link>
      <span className="text-muted-foreground">/</span>
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline transition-colors"
      >
        X
      </Link>
      <span className="text-muted-foreground">/</span>
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline transition-colors"
      >
        LinkedIn
      </Link>
      {/* <span className="text-muted-foreground">/</span>
			<a
				href={siteConfig.links.email}
				className="hover:underline transition-colors"
			>
				Email
			</a>
			<span className="text-muted-foreground">/</span>
			<Link
				href={siteConfig.links.discord}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:underline transition-colors"
			>
				Discord
			</Link>
			<span className="text-muted-foreground">/</span>
			<Link
				href={siteConfig.links.telegram}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:underline transition-colors"
			>
				Telegram
			</Link> */}
    </div>
  );
}
