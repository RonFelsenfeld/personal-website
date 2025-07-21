import { SectionId } from '@/types/sitemap.types'

export const COPYRIGHT_YEAR_PLACEHOLDER = '{year}'

export const getSectionLink = (sectionId: SectionId): string => {
  return `#${sectionId}`
}

export const getCopyrightText = (textWithYearPlaceholder: string): string => {
  const currentYear = new Date().getFullYear().toString()

  return textWithYearPlaceholder.replace(
    COPYRIGHT_YEAR_PLACEHOLDER,
    currentYear
  )
}
