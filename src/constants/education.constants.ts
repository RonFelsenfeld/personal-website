import {
  EducationItemData,
  EducationItemName,
  InstitutionName,
} from '@/types/education.types'

import { i18n } from './texts.constants'

const { educationSection: educationSectionI18n } = i18n

export const educationData: Record<EducationItemName, EducationItemData> = {
  [EducationItemName.AIForDevelopers]: {
    id: 'ai-for-developers-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.AIForDevelopers]
        .title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.AIForDevelopers]
        .description,
    institution: InstitutionName.YanivArad,
    skills: ['AI', 'Development'],
    completedAt: new Date('2025-07-01'),
  },
  [EducationItemName.MySQL]: {
    id: 'mysql-course',
    title: educationSectionI18n.educationTexts[EducationItemName.MySQL].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.MySQL].description,
    institution: InstitutionName.Udemy,
    skills: ['MySQL'],
    completedAt: new Date('2025-03-01'),
  },
  [EducationItemName.TypeScript]: {
    id: 'typescript-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript]
        .description,
    institution: InstitutionName.Udemy,
    skills: ['TypeScript'],
    completedAt: new Date('2024-08-01'),
  },
  [EducationItemName.FullStack]: {
    id: 'full-stack-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.FullStack].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.FullStack]
        .description,
    institution: InstitutionName.CodingAcademy,
    skills: ['Full Stack'],
    completedAt: new Date('2024-05-01'),
  },
  [EducationItemName.CleanCode]: {
    id: 'clean-code-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.CleanCode].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.CleanCode]
        .description,
    institution: InstitutionName.Udemy,
    skills: ['Clean Code'],
    completedAt: new Date('2023-08-01'),
  },
  [EducationItemName.HTMLCSS]: {
    id: 'html-css-course',
    title: educationSectionI18n.educationTexts[EducationItemName.HTMLCSS].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.HTMLCSS]
        .description,
    institution: InstitutionName.Udemy,
    skills: ['HTML', 'CSS'],
    completedAt: new Date('2023-03-01'),
  },
}
