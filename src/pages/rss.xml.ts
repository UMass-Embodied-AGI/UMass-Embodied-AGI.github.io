import { siteConfig } from "@/config";
import rss from "@astrojs/rss";
import { getResearchYearList } from "@/utils/content-utils";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const researchYears = await getResearchYearList();

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || "No description",
    site: context.site ?? "https://fuwari.vercel.app",
    items: researchYears.map((year) => ({
      title: year.name,
      description: `Research from ${year.name} - ${year.count} publications`,
      link: `/research/${year.key}/`,
      content: `Number of publications: ${year.count}`,
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}