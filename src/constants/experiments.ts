import { ExperimentMetadata, ExperimentName } from '@/types/experiment.types'

export const experimentsMetadata: Record<ExperimentName, ExperimentMetadata> = {
  [ExperimentName.MCPServer]: {
    id: 'mcp-server-experiment',
    technologies: ['Python', 'MCP'],
    repositoryLink: 'https://github.com/RonFelsenfeld/mcp-playground',
  },
  [ExperimentName.GoProxy]: {
    id: 'go-proxy-experiment',
    technologies: ['Go'],
    repositoryLink: 'https://github.com/RonFelsenfeld/go-proxy',
  },
}
