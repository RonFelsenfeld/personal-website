import { ButtonProps } from '@/components/UI'

export interface LinkConfiguration {
  id: string
  link: string
  buttonProps: Omit<ButtonProps, 'handleClick'>
}

export interface PortfolioItemData {
  id: string
  title: string
  description: string
  technologies: string[]
  linksConfigurations: LinkConfiguration[]
}

/*
  Notes:

  - Because the List component is generic and requires a T with id, the id field needs to be at the top-level of the PortfolioItem type.
  
  - The initial separation of the texts and the metadata is done to later support i18n.
*/
