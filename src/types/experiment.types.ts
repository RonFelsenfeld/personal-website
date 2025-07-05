export enum ExperimentName {
  MCPServer = 'mcp-server',
  GoProxy = 'go-proxy',
}

export interface ExperimentMetadata {
  id: string
  technologies: string[]
  repositoryLink: string
}

export type ExperimentsTexts = Record<
  ExperimentName,
  Pick<Experiment, 'title' | 'description'>
>

/*
  Notes:

  - Because the List component is generic and requires a T with id, the id field needs to be at the top-level of the Experiment type.
  
  - The initial separation of the texts and the metadata is done to later support i18n.
*/

export interface Experiment {
  id: string
  title: string
  description: string
  metadata: Omit<ExperimentMetadata, 'id'>
}
