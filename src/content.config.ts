import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      target: z.union([z.literal('designer'), z.literal('engineer'), z.literal('all')]),
      eventSiteURL: z.string(),
      thumbnail: image(),
    }),
});

const staff = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      number: z.number(),
      description: z.string().nullable(),
      role: z.string().nullable(),
      x: z.string(),
      facebook: z.string().optional(),
      profile: image(),
    }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      type: z.enum(['community', 'sponsor']),
      order: z.number().optional(),
      thumbnail: image(),
    }),
});

// This is needed to make TypeScript happy
declare module 'astro:content' {
  interface CollectionEntry {
    sponsors: {
      data: {
        name: string;
        url: string;
        type: 'community' | 'sponsor';
        order?: number;
        thumbnail: ImageMetadata;
      };
    };
  }
}

export const collections = { events, staff, sponsors };
