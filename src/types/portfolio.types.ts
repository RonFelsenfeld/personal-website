import { ButtonProps } from '@/types/button.types'

export enum ProjectName {
  SketchMate = 'sketchMate',
  Xpenser = 'xpenser',
  Anyday = 'anyday',
}

interface ProjectLinks {
  liveVersion: string
  frontend: string
  backend: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  links: ProjectLinks
}

export enum ExperimentName {
  MisterToy = 'misterToy',
  MCPServer = 'mcpServer',
  GoProxy = 'goProxy',
}

export interface Experiment {
  id: string
  title: string
  description: string
  technologies: string[]
  repositoryLink: string
}

export interface PortfolioLinkConfiguration {
  id: string
  link: string
  buttonProps: Omit<ButtonProps, 'handleClick'>
}

export interface PortfolioItemData {
  id: string
  title: string
  description: string
  technologies: string[]
  linksConfigurations: PortfolioLinkConfiguration[]
}

export interface SocialLink {
  title: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
}

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
  isFavorite: boolean
}

export interface IdeologyTrait {
  id: string
  title: string
}

export interface IdeologyItemData {
  id: string
  title: string
  phrase: string
  description: string
  traits: IdeologyTrait[]
  Icon: React.ComponentType<{ className?: string }>
}
