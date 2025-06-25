export enum ProjectName {
  SketchMate = 'sketchMate',
  Xpenser = 'xpenser',
  Anyday = 'anyday',
}

interface ProjectLinks {
  main?: string
  frontend?: string
  backend?: string
}

export interface ProjectMetadata {
  technologies: string[]
  links: ProjectLinks
}

export interface Project {
  title: string
  description: string
  metadata: ProjectMetadata
}

export type ProjectsTexts = Record<ProjectName, Omit<Project, 'metadata'>>
