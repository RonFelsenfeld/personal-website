import { SectionId } from '@/types/section.types'

export const getSectionLink = (sectionId: SectionId): string => {
  return `#${sectionId}`
}
