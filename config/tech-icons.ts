interface TechIcon {
  logoUrl: string;
  invertInDarkMode?: boolean;
  invertInLightMode?: boolean;
}

export const techIcons: Record<string, TechIcon> = {
  "Next.js": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
    invertInDarkMode: true,
  },
  "TypeScript": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/typescript.svg",
  },
  "React": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  "Tailwind CSS": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg",
  },
  "Tailwind": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg",
  },
  "PostgreSQL": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/postgresql.svg",
  },
  "PostgressSQL": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/postgresql.svg",
  },
  "MongoDB": {
    logoUrl: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/mongodb.svg",
  },
  "Supabase": {
    logoUrl: "https://cdn.simpleicons.org/supabase",
  },
  "Bun": {
    logoUrl: "https://cdn.simpleicons.org/bun",
  },
  "Hono": {
    logoUrl: "https://cdn.simpleicons.org/hono",
  },
  "Solidity": {
    logoUrl: "https://cdn.simpleicons.org/solidity",
    invertInDarkMode: true,
  },
  "IPFS": {
    logoUrl: "https://cdn.simpleicons.org/ipfs",
  },
  "Drizzle ORM": {
    logoUrl: "https://cdn.simpleicons.org/drizzle",
    invertInDarkMode: true,
  },
  "Zod": {
    logoUrl: "https://cdn.simpleicons.org/zod",
  },
};

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name];
}
