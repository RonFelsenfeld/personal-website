import { Experiment, ExperimentName } from '@/types/portfolio.types'

import { i18n } from './texts.constants'

const { experimentsSection: experimentsSectionI18n } = i18n

export const experimentsData: Record<ExperimentName, Experiment> = {
  [ExperimentName.MisterToy]: {
    id: 'mister-toy-experiment',
    title:
      experimentsSectionI18n.experimentsTexts[ExperimentName.MisterToy].title,
    description:
      experimentsSectionI18n.experimentsTexts[ExperimentName.MisterToy]
        .description,
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
  [ExperimentName.MCPServer]: {
    id: 'mcp-server-experiment',
    title:
      experimentsSectionI18n.experimentsTexts[ExperimentName.MCPServer].title,
    description:
      experimentsSectionI18n.experimentsTexts[ExperimentName.MCPServer]
        .description,
    technologies: ['Python', 'MCP'],
    repositoryLink: 'https://github.com/RonFelsenfeld/mcp-playground',
  },
  [ExperimentName.GoProxy]: {
    id: 'go-proxy-experiment',
    title:
      experimentsSectionI18n.experimentsTexts[ExperimentName.GoProxy].title,
    description:
      experimentsSectionI18n.experimentsTexts[ExperimentName.GoProxy]
        .description,
    technologies: ['Go'],
    repositoryLink: 'https://github.com/RonFelsenfeld/go-proxy',
  },
}
