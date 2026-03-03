import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Inter, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Menu } from "@/components/sections/menu"
import { ImageViewer } from "@/components/shells/image-viewer"
import { siteConfig } from "@/config/site"
import { Footer } from "@/components/ui/footer"
import { DashedVerticalLines } from "@/components/ui/grid-patterns"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import ClientDither from "@/components/dither/client-dither"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: ["400"],
})

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Samuel Danso",
		"Full-Stack Engineer",
		"Frontend Engineer",
		"Backend Engineer",
		"Software Engineer",
		"Product Manager",
		"Product Engineer",
		"AI Development",
		"AI Developer",
		"AI Product",
		"Web3 Development",
		"Web3 Developer",
		"Web3 Product",
		"samueldanso",
		"samueldanso.com",
		"samueldanso portfolio",
		"samueldanso github",
		"samueldanso twitter",
		"samueldanso linkedin",
	],
	authors: [{ name: "Samuel Danso", url: "https://samueldanso.com" }],
	creator: "samueldanso",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@samueldans0",
	},
	icons: {
		icon: "/icon.svg",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export const viewport: Viewport = {
	colorScheme: "dark light",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${outfit.variable} ${instrumentSerif.variable} min-h-screen antialiased font-sans noise-overlay`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					<ClientDither />
					<ProgressiveBlur
						className="pointer-events-none z-[500] fixed bottom-0 w-full h-20 hidden md:block"
						direction="bottom"
						blurIntensity={0.6}
					/>
					<Menu />
					<DashedVerticalLines className="max-w-[48rem] mx-auto pt-6 sm:pt-8">
						<main className="w-full flex-1 pt-2 pb-2 sm:pt-4 sm:pb-4">{children}</main>
						<Footer />
					</DashedVerticalLines>
					<ImageViewer />
				</ThemeProvider>
			</body>
		</html>
	)
}
