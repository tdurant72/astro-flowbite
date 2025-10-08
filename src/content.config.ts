import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: z.string(),
    alt: z.string(),
  });

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
  schema: () =>
    z.object({
      title: z.string(),
      slug: z.string(),
      postimage: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      author: z.string(),
      pubDate: z.string().transform((str) =>
        new Date(str).toLocaleDateString("en-US", {
          timeZone: "America/New_York",
        })
      ),
      tags: z.array(z.string()),
      description: z.string().optional(),
      category: z.string().optional(),
    }),
});
const project = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: () =>
    z.object({
      title: z.string(),
      projectimage: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      developer: z.string().optional(),
      tags: z.array(z.string()),
      description: z.string().optional(),
      type: z.string(),
    }),
});
export const collections = {
  posts: posts,
  projects: project,
};
