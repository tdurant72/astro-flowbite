import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    description: z.string(),
    type: z.string(),
    developer: z.string(),
    image: z.string().optional(),
  }),
});
