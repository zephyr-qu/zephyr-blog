import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = { posts };