import { z, defineCollection } from "astro:content";
import { postSchema } from "../schemas/BlogSchema";
import { projectSchema } from "../schemas/ProjectSchema";

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});
const blogCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
