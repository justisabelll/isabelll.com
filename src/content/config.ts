import { z, defineCollection } from 'astro:content';

// TODO: setup project collection

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(['11 0000 1000', 'Other']),
    date: z.date(),
    lastModified: z.date(),
    draft: z.boolean(),
    featured: z.boolean(),
    tags: z.array(z.string()),
    coverImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  essays: essaysCollection,
};
