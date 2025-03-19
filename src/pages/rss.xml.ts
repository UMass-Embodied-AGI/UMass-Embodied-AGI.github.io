import { siteConfig } from "@/config";
import rss from "@astrojs/rss";
import { getSortedPosts } from "@utils/content-utils";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getSortedPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || "No description",
    site: context.site ?? "https://fuwari.vercel.app",
    items: blog.map((post) => {
      // Ensure post.body is a string before parsing
      const content =
        typeof post.body === "string"
          ? sanitizeHtml(parser.render(post.body), {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            })
          : "";

      return {
        title: post.data.title,
        description: post.data.description || "",
        link: `/posts/${post.slug}/`,
        content,
      };
    }),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}
