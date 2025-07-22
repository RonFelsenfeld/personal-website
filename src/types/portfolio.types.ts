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

export interface SocialLink {
  title: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
}

export interface IdeologyItemData {
  id: string
  title: string
  description: string
  traits: string[]
  Icon: React.ComponentType<{ className?: string }>
}
