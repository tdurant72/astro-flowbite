import { z, type SchemaContext } from "astro:content";

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });
export const projectSchema = ({ image }: { image: any }) => // Use SchemaContext
  z.object({
    title: z.string(),
    cover: image(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    type: z.string(),
    developer: z.string().optional(),
    // Corrected the key name to 'image' to match your MDX
    projectimage: image().optional(),
    alt: z.string().optional(),
    projectvideo: z.any().optional(),
    schema: z.any().optional(),
  });
