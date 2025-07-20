import { ButtonProps } from '@/types/button.types'

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
