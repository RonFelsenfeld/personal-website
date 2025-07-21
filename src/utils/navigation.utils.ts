import { SectionId } from '@/types/sitemap.types'

export const getSectionLink = (sectionId: SectionId): string => {
  return `#${sectionId}`
}
