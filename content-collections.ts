import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
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

const projects = defineCollection({
  name: "projects",
  directory: "projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
    status: z.string(),
    sort: z.number(),
    tech: z.array(z.string()).optional(),
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

const work = defineCollection({
  name: "work",
  directory: "work-experience",
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

export default defineConfig({
  collections: [posts, projects, work],
});
