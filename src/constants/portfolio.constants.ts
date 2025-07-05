import { Project, ProjectName } from '@/types/project.types'
import { Experiment, ExperimentName } from '@/types/experiment.types'

import { i18n } from './texts.constants'

const {
  projectsSection: projectsSectionI18n,
  experimentsSection: experimentsSectionI18n,
} = i18n

const projectsData: Record<ProjectName, Project> = {
  [ProjectName.SketchMate]: {
    id: 'sketchMate-project',
    title: projectsSectionI18n.projectsTexts.sketchMate.title,
    description: projectsSectionI18n.projectsTexts.sketchMate.description,
    metadata: {
      technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
      links: {
        liveVersion: 'https://sketchmate-mnu9.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
        backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
      },
    },
  },
  [ProjectName.Xpenser]: {
    id: 'xpenser-project',
    title: projectsSectionI18n.projectsTexts.xpenser.title,
    description: projectsSectionI18n.projectsTexts.xpenser.description,
    metadata: {
      technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
      links: {
        liveVersion: 'https://xpenser-mpg1.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
        backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
      },
    },
  },
  [ProjectName.Anyday]: {
    id: 'anyday-project',
    title: projectsSectionI18n.projectsTexts.anyday.title,
    description: projectsSectionI18n.projectsTexts.anyday.description,
    metadata: {
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
      links: {
        liveVersion: 'https://anyday-lodf.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
        backend: 'https://github.com/AtarMor/Anyday',
      },
    },
  },
}

const experimentsData: Record<ExperimentName, Experiment> = {
  [ExperimentName.MisterToy]: {
    id: 'mister-toy-experiment',
    title: experimentsSectionI18n.experimentsTexts.misterToy.title,
    description: experimentsSectionI18n.experimentsTexts.misterToy.description,
    metadata: {
      technologies: [
        'TypeScript',
        'ReactJS',
        'Redux Toolkit',
        'SASS',
        'GraphQL',
        'MongoDB',
      ],
      repositoryLink: 'https://github.com/RonFelsenfeld/MisterToy-TS-Frontend',
    },
  },
  [ExperimentName.MCPServer]: {
    id: 'mcp-server-experiment',
    title: experimentsSectionI18n.experimentsTexts.mcpServer.title,
    description: experimentsSectionI18n.experimentsTexts.mcpServer.description,
    metadata: {
      technologies: ['Python', 'MCP'],
      repositoryLink: 'https://github.com/RonFelsenfeld/mcp-playground',
    },
  },
  [ExperimentName.GoProxy]: {
    id: 'go-proxy-experiment',
    title: experimentsSectionI18n.experimentsTexts.goProxy.title,
    description: experimentsSectionI18n.experimentsTexts.goProxy.description,
    metadata: {
      technologies: ['Go'],
      repositoryLink: 'https://github.com/RonFelsenfeld/go-proxy',
    },
  },
}

export const portfolio = {
  projectsData,
  experimentsData,
} as const
