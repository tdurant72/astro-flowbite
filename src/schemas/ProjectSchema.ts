import { z, type SchemaContext } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

export const projectSchema = ({ image }: { image: any }) =>
  z.object({
    title: z.string(),
    cover: image(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    type: z.string(),
    developer: z.string().optional(),
  });
