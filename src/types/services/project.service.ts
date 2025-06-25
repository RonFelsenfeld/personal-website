import { ProjectMetadata, ProjectName } from '@/types/project.types'

const getProjectsMetadata = (): Record<ProjectName, ProjectMetadata> => {
  return {
    [ProjectName.SketchMate]: {
      id: 'sketchMate-project',
      technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
      links: {
        main: 'https://sketchmate-mnu9.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
        backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
      },
    },
    [ProjectName.Xpenser]: {
      id: 'xpenser-project',
      technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
      links: {
        main: 'https://xpenser-mpg1.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
        backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
      },
    },
    [ProjectName.Anyday]: {
      id: 'anyday-project',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
      links: {
        main: 'https://anyday-lodf.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
        backend: 'https://github.com/AtarMor/Anyday',
      },
    },
  }
}

export const projectService = {
  getProjectsMetadata,
}
