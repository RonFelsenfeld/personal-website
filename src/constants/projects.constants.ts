import { Project, ProjectName } from '@/types/portfolio.types'

import { i18n } from './texts.constants'

const { projectsSection: projectsSectionI18n } = i18n

export const projectsData: Record<ProjectName, Project> = {
  [ProjectName.SketchMate]: {
    id: 'sketchMate-project',
    title: projectsSectionI18n.projectsTexts[ProjectName.SketchMate].title,
    description:
      projectsSectionI18n.projectsTexts[ProjectName.SketchMate].description,
    technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
    links: {
      liveVersion: 'https://sketchmate-mnu9.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
      backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
    },
  },
  [ProjectName.Xpenser]: {
    id: 'xpenser-project',
    title: projectsSectionI18n.projectsTexts[ProjectName.Xpenser].title,
    description:
      projectsSectionI18n.projectsTexts[ProjectName.Xpenser].description,
    technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
    links: {
      liveVersion: 'https://xpenser-mpg1.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
      backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
    },
  },
  [ProjectName.Anyday]: {
    id: 'anyday-project',
    title: projectsSectionI18n.projectsTexts[ProjectName.Anyday].title,
    description:
      projectsSectionI18n.projectsTexts[ProjectName.Anyday].description,
    technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
    links: {
      liveVersion: 'https://anyday-lodf.onrender.com/',
      frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
      backend: 'https://github.com/AtarMor/Anyday',
    },
  },
}
