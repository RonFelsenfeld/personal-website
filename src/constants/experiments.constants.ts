import { Experiment, ExperimentName } from '@/types/experiment.types'

import { i18n } from './texts.constants'

const { experimentsSection: experimentsSectionI18n } = i18n

export const experimentsData: Record<ExperimentName, Experiment> = {
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