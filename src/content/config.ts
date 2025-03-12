import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
})

export const researchCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    title: z.string(),
    url: z.string().optional(),
    authors: z.array(z.string()).optional().default([]),
    year: z.string().optional(),
    preview: z.string().optional().default(''),
    type: z.string().optional().default('misc'),
    eprint: z.string().optional(),
    archiveprefix: z.string().optional(),
    primaryclass: z.string().optional(),
    pdf: z.string().optional(),
    arxiv: z.string().optional(), 
    website: z.string().optional(),
    booktitle: z.string().optional(),
    code: z.string().optional(),
    selected: z.boolean().optional(),
    topic: z.string().optional(),
    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  })),
})

export const peopleCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    category: z.string(),
    members: z.array(z.object({
      name: z.string(),
      photo: z.string().optional(),
      title: z.string().optional(),
      interests: z.string().optional(),
      description: z.string().optional(),
      achievements: z.string().optional(),
      education: z.string().optional()
    }))
  }))
})

export const collections = {
  posts: postsCollection,
  research: researchCollection,
  people: peopleCollection,
}
