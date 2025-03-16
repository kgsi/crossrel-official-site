import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: ({ image } ) =>  z.object({
    title: z.string(),
    date: z.date(),
    target: z.union([z.literal('designer'), z.literal('engineer')]),
    eventSiteURL: z.string(),
    thumbnail: image(),
  })
});

const staff = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/staff" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    role: z.string(),
    x: z.string(),
    facebook: z.string(),
    profile: image(),
  }),
});

export const collections = { events, staff };
