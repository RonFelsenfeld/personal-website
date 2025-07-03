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

export interface ProjectMetadata {
  id: string
  technologies: string[]
  links: ProjectLinks
}

export type ProjectsTexts = Record<
  ProjectName,
  Pick<Project, 'title' | 'description'>
>

export interface Project {
  id: string
  title: string
  description: string
  metadata: Omit<ProjectMetadata, 'id'>
}
