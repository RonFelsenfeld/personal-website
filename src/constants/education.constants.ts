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
    skills: [
      'AI Agents',
      'MCP',
      'GenAI',
      'Prompt Engineering',
      'LLMs',
      'LangChain',
    ],
    completedAt: new Date('2025-07-01'),
    isFavorite: true,
  },
  [EducationItemName.MySQL]: {
    id: 'mysql-course',
    title: educationSectionI18n.educationTexts[EducationItemName.MySQL].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.MySQL].description,
    institution: InstitutionName.Udemy,
    skills: ['MySQL', 'Relational Database', 'Data Modeling', 'RDBMS'],
    completedAt: new Date('2025-03-01'),
    isFavorite: false,
  },
  [EducationItemName.TypeScript]: {
    id: 'typescript-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.TypeScript]
        .description,
    institution: InstitutionName.Udemy,
    skills: ['TypeScript', 'OOP', 'Interfaces', 'Generics', 'Enums'],
    completedAt: new Date('2024-08-01'),
    isFavorite: false,
  },
  [EducationItemName.FullStack]: {
    id: 'full-stack-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.FullStack].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.FullStack]
        .description,
    institution: InstitutionName.CodingAcademy,
    skills: [
      'Full Stack Development',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    completedAt: new Date('2024-05-01'),
    isFavorite: true,
  },
  [EducationItemName.CleanCode]: {
    id: 'clean-code-course',
    title:
      educationSectionI18n.educationTexts[EducationItemName.CleanCode].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.CleanCode]
        .description,
    institution: InstitutionName.Udemy,
    skills: [
      'Clean Code',
      'Refactoring',
      'SOLID Principles',
      'Design Patterns',
      'Code Quality',
    ],
    completedAt: new Date('2023-08-01'),
    isFavorite: false,
  },
  [EducationItemName.HTMLCSS]: {
    id: 'html-css-course',
    title: educationSectionI18n.educationTexts[EducationItemName.HTMLCSS].title,
    description:
      educationSectionI18n.educationTexts[EducationItemName.HTMLCSS]
        .description,
    institution: InstitutionName.Udemy,
    skills: [
      'HTML',
      'CSS',
      'Responsive Design',
      'Semantic Markup',
      'UI/UX Principles',
    ],
    completedAt: new Date('2023-03-01'),
    isFavorite: false,
  },
}
