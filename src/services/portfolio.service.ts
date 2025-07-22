import {
  AimOutlined,
  BuildOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'

import { IdeologyItemData, SocialLink } from '@/types/portfolio.types'

import { i18n } from '@/constants/texts.constants'

const { ideologySection: ideologySectionI18n } = i18n

const getSocialLinks = (): SocialLink[] => {
  const socialLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/ronfelsenfeld',
      Icon: GithubOutlined,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ron-felsenfeld/',
      Icon: LinkedinOutlined,
    },
  ]

  return socialLinks
}

const getIdeologyItems = (): IdeologyItemData[] => {
  return [
    {
      id: 'collaboration',
      title: ideologySectionI18n.items.collaboration.title,
      description: ideologySectionI18n.items.collaboration.description,
      traits: ideologySectionI18n.items.collaboration.traits,
      Icon: UsergroupAddOutlined,
    },
    {
      id: 'professionalism',
      title: ideologySectionI18n.items.professionalism.title,
      description: ideologySectionI18n.items.professionalism.description,
      traits: ideologySectionI18n.items.professionalism.traits,
      Icon: AimOutlined,
    },
    {
      id: 'curiosity',
      title: ideologySectionI18n.items.curiosity.title,
      description: ideologySectionI18n.items.curiosity.description,
      traits: ideologySectionI18n.items.curiosity.traits,
      Icon: SearchOutlined,
    },
    {
      id: 'craftsmanship',
      title: ideologySectionI18n.items.craftsmanship.title,
      description: ideologySectionI18n.items.craftsmanship.description,
      traits: ideologySectionI18n.items.craftsmanship.traits,
      Icon: BuildOutlined,
    },
  ]
}

export const portfolioService = {
  getSocialLinks,
  getIdeologyItems,
}
