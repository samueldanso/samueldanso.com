import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const writing = defineCollection({
  name: "writing",
  directory: "writing",
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
  directory: "work",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
    status: z.string(),
    sort: z.number(),
    stack: z.array(z.string()).optional(),
    source: z.string().optional(),
    image: z.string().optional(),
    date: z.string().optional(),
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
  directory: "experience",
  include: "**/*.md",
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
  directory: "awards",
  include: "**/*.md",
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string().optional(),
    href: z.string().optional(),
  }),
});

const highlights = defineCollection({
  name: "highlights",
  directory: "highlights",
  include: "**/*.md",
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
