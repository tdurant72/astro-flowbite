import { z, type SchemaContext } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

export const postSchema = ({ image }: { image: any }) =>
  z.object({
    title: z.string(),
    postimage: image(),
    author: z.string(),
    pubDate: z.string().transform((str) =>
      new Date(str).toLocaleDateString("en-US", {
        timeZone: "America/New_York",
      })
    ),
    tags: z.array(z.string()),
    description: z.string().optional(),
    category: z.string().optional(),
  });
