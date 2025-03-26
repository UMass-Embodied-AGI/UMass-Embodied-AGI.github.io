import { LinkPreset, type NavBarLink } from "@/types/config";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: "/",
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: "/about/",
  },
  [LinkPreset.Research]: {
    name: "Publications",
    url: "/publications/",
  },
  [LinkPreset.People]: {
    name: "People",
    url: "/people/",
  },
  [LinkPreset.Robots]: {
    name: "Robots",
    url: "/robots/",
  },
  [LinkPreset.Opportunity]: {
    name: "Opportunity",
    url: "/opportunity/",
  },
};
