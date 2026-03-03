import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const writing = defineCollection({
  name: "writing",
  directory: "content/writing",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
  transform: async (document, { collection, cache }) => {
    const mdx = await compileMDX({ cache }, document);
    const docs = await collection.documents();
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath,
    );

    return {
      ...document,
      mdx,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
    };
  },
});

const work = defineCollection({
  name: "work",
  directory: "content/work",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
    status: z.string(),
    sort: z.number(),
    stack: z.array(z.string()).optional(),
    source: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    date: z.string().optional(),
    timeline: z.string().optional(),
    role: z.string().optional(),
    overview: z.string().optional(),
    problem: z.string().optional(),
    whatIBuilt: z.string().optional(),
    challenges: z.string().optional(),
    outcome: z.string().optional(),
    team: z.array(z.string()).optional(),
    award: z.string().optional(),
  }),
  transform: async (document, { collection, cache }) => {
    const mdx = await compileMDX({ cache }, document);
    const docs = await collection.documents();
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath,
    );

    return {
      ...document,
      mdx,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
    };
  },
});

const experience = defineCollection({
  name: "experience",
  directory: "content/experience",
  include: "**/*.mdx",
  schema: z.object({
    year: z.string(),
    isPresent: z.boolean().optional(),
    role: z.string(),
    company: z.string(),
    companyHref: z.string().optional(),
    location: z.string(),
  }),
});

const awards = defineCollection({
  name: "awards",
  directory: "content/awards",
  include: "**/*.mdx",
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string().optional(),
    href: z.string().optional(),
    sort: z.number(),
  }),
});

const highlights = defineCollection({
  name: "highlights",
  directory: "content/highlights",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    sort: z.number(),
    type: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

export default defineConfig({
  collections: [writing, work, experience, awards, highlights],
});
