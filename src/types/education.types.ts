export enum EducationItemName {
  AIForDevelopers = 'AIForDevelopers',
  MySQL = 'MySQL',
  TypeScript = 'TypeScript',
  FullStack = 'FullStack',
  CleanCode = 'CleanCode',
  HTMLCSS = 'HTMLCSS',
}

export enum InstitutionName {
  CodingAcademy = 'Coding Academy',
  YanivArad = 'Yaniv Arad Training Labs',
  Udemy = 'Udemy',
}

export interface EducationItemData {
  id: string
  title: string
  description: string
  institution: InstitutionName
  skills: string[]
  completedAt: Date
}
