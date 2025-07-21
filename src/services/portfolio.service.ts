import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import { SocialLink } from '@/types/portfolio.types'

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

export const portfolioService = {
  getSocialLinks,
}
