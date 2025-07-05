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

/*
  Notes:

  - Because the List component is generic and requires a T with id, the id field needs to be at the top-level of the Project type.
  
  - The initial separation of the texts and the metadata is done to later support i18n.
*/

export interface Project {
  id: string
  title: string
  description: string
  metadata: Omit<ProjectMetadata, 'id'>
}
