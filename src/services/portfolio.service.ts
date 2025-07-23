import {
  AimOutlined,
  BuildOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'

import { IdeologyItemData, SocialLink } from '@/types/portfolio.types'

import { generateRandomId } from '@/utils/general.utils'

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
  const { items } = ideologySectionI18n
  const { collaboration, professionalism, curiosity, craftsmanship } = items

  return [
    {
      id: 'collaboration',
      title: collaboration.title,
      phrase: collaboration.phrase,
      description: collaboration.description,
      traits: collaboration.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: UsergroupAddOutlined,
    },
    {
      id: 'professionalism',
      title: professionalism.title,
      phrase: professionalism.phrase,
      description: professionalism.description,
      traits: professionalism.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: AimOutlined,
    },
    {
      id: 'curiosity',
      title: curiosity.title,
      phrase: curiosity.phrase,
      description: curiosity.description,
      traits: curiosity.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: SearchOutlined,
    },
    {
      id: 'craftsmanship',
      title: craftsmanship.title,
      phrase: craftsmanship.phrase,
      description: craftsmanship.description,
      traits: craftsmanship.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: BuildOutlined,
    },
  ]
}

export const portfolioService = {
  getSocialLinks,
  getIdeologyItems,
}
