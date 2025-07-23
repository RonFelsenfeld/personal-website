import { SectionId, SitemapItem } from '@/types/sitemap.types'
import { i18n } from '@/constants/texts.constants'

const { sitemap: sitemapI18n } = i18n

const getSitemapLinks = (): SitemapItem[] => {
  const sectionIds = Object.values(SectionId)

  const sitemap: SitemapItem[] = sectionIds.map(id => ({
    id,
    label: sitemapI18n.links[id],
  }))

  return sitemap
}

export const sitemapService = {
  getSitemapLinks,
}
