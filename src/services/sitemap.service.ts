import { SectionId, SitemapItem } from '@/types/sitemap.types'
import { i18n } from '@/constants/texts.constants'

const { sitemap: sitemapI18n } = i18n

const getSitemapLinks = (): SitemapItem[] => {
  const sitemap: SitemapItem[] = [
    {
      id: SectionId.About,
      label: sitemapI18n.links[SectionId.About],
    },
    {
      id: SectionId.Projects,
      label: sitemapI18n.links[SectionId.Projects],
    },
    {
      id: SectionId.Education,
      label: sitemapI18n.links[SectionId.Education],
    },
    {
      id: SectionId.Experiments,
      label: sitemapI18n.links[SectionId.Experiments],
    },
    {
      id: SectionId.Contact,
      label: sitemapI18n.links[SectionId.Contact],
    },
    {
      id: SectionId.Ideology,
      label: sitemapI18n.links[SectionId.Ideology],
    },
  ]

  return sitemap
}

export const sitemapService = {
  getSitemapLinks,
}
