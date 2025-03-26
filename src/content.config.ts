import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const researchCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string().optional(),
      authors: z.array(z.string()).optional().default([]),
      year: z.string().optional(),
      preview: z.string().optional().default(""),
      paper: z.string().optional(),
      website: z.string().optional(),
      booktitle: z.string().optional(),
      code: z.string().optional(),
      selected: z.boolean().optional(),
      category: z.string().optional(),
      conference: z.string().optional(),
      /* For internal use */
      prevTitle: z.string().default(""),
      prevSlug: z.string().default(""),
      nextTitle: z.string().default(""),
      nextSlug: z.string().default(""),
    }),
  ),
});

export const peopleCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      category: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          photo: z.string().optional(),
          role: z.string().optional(),
          url: z.string().optional(),
          description: z.string().optional(),
        }),
      ),
    }),
  ),
});

export const collections = {
  research: researchCollection,
  people: peopleCollection,
};
