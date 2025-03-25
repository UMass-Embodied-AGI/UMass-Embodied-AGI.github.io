import { getCollection, getEntry } from "astro:content";
import type { BlogPostData } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export type ResearchTypes = {
  name: string;
  key: string;
  count: number;
};

export async function getResearchCategoryList(): Promise<ResearchTypes[]> {
  const researchList = await getEntry("research", "list");
  if (!researchList) {
    return [];
  }

  const count: { [key: string]: number } = {};
  researchList.data.map((research: any) => {
    if (!research.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    const category = research.category.replace(/ /g, "-");
    count[category] = count[category] ? count[category] + 1 : 1;
  });

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  const ret: ResearchTypes[] = [];
  for (const c of lst) {
    ret.push({ name: c, key: c, count: count[c] });
  }
  return ret;
}

export async function getResearchYearList(): Promise<ResearchTypes[]> {
  const researchList = await getEntry("research", "list");
  if (!researchList) {
    return [];
  }

  const count: { [key: string]: number } = {};
  researchList.data.map((research: any) => {
    if (!research.year) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    count[research.year] = count[research.year] ? count[research.year] + 1 : 1;
  });

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  const ret: ResearchTypes[] = [];
  for (const c of lst) {
    ret.push({ name: c, key: c, count: count[c] });
  }
  return ret;
}
