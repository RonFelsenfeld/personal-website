export enum EducationItemName {
  TypeScript = 'TypeScript',
}

export enum InstitutionName {
  Udemy = 'Udemy',
}

export interface EducationItemData {
  id: string
  title: string
  description: string
  institution: InstitutionName
  skills: string[]
  completedAt: Date
  isFavorite: boolean
}
