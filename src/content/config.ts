import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    image: z.string(),
  }),
}); 

export const collections = {
  blog: blogCollection,
}