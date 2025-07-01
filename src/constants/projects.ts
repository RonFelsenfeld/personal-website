import { ProjectMetadata, ProjectName } from '@/types/project.types'

export const projectsMetadata: Record<ProjectName, ProjectMetadata> = {
  [ProjectName.SketchMate]: {
    id: 'sketchMate-project',
    technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
    links: {
      liveVersion: 'https://sketchmate-mnu9.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
      backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
    },
  },
  [ProjectName.Xpenser]: {
    id: 'xpenser-project',
    technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
    links: {
      liveVersion: 'https://xpenser-mpg1.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
      backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
    },
  },
  [ProjectName.Anyday]: {
    id: 'anyday-project',
    technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
    links: {
      liveVersion: 'https://anyday-lodf.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
      backend: 'https://github.com/AtarMor/Anyday',
    },
  },
}
