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
