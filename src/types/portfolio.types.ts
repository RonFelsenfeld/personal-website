export interface PortfolioItemLinks {
  liveVersion?: string
  frontend?: string
  backend?: string
}

export interface PortfolioItemMetadata {
  id: string
  technologies: string[]
  links: PortfolioItemLinks
}

export interface PortfolioItemData {
  id: string
  title: string
  description: string
  metadata: Omit<PortfolioItemMetadata, 'id'>
}

/*
  Notes:

  - Because the List component is generic and requires a T with id, the id field needs to be at the top-level of the PortfolioItem type.
  
  - The initial separation of the texts and the metadata is done to later support i18n.
*/
