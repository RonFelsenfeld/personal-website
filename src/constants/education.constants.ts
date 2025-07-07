import {
  EducationItemData,
  EducationItemName,
  InstitutionName,
} from '@/types/education.types'

import { i18n } from './texts.constants'

const { educationSection: educationSectionI18n } = i18n

export const educationData: Record<EducationItemName, EducationItemData> = {
  [EducationItemName.TypeScript]: {
    id: 'typescript-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript]
        .description,
    institution: InstitutionName.Udemy,
    skills: ['TypeScript'],
    completedAt: new Date('2024-01-01'),
    isFavorite: false,
  },
}
