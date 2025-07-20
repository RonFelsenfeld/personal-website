export enum ExperimentName {
  MisterToy = 'misterToy',
  MCPServer = 'mcpServer',
  GoProxy = 'goProxy',
}

export interface Experiment {
  id: string
  title: string
  description: string
  technologies: string[]
  repositoryLink: string
}
