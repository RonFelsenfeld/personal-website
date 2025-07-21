import { SectionId, SitemapItem } from '@/types/sitemap.types'
import { i18n } from '@/constants/texts.constants'

const { appHeader: appHeaderI18n } = i18n

const getSitemap = (): SitemapItem[] => {
  const sitemap: SitemapItem[] = [
    {
      id: SectionId.About,
      label: appHeaderI18n.links[SectionId.About],
    },
    {
      id: SectionId.Projects,
      label: appHeaderI18n.links[SectionId.Projects],
    },
    {
      id: SectionId.Education,
      label: appHeaderI18n.links[SectionId.Education],
    },
    {
      id: SectionId.Experiments,
      label: appHeaderI18n.links[SectionId.Experiments],
    },
    {
      id: SectionId.Contact,
      label: appHeaderI18n.links[SectionId.Contact],
    },
  ]

  return sitemap
}

export const sitemapService = {
  getSitemap,
}
