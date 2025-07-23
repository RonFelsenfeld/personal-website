import {
  AimOutlined,
  BuildOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'

import {
  IdeologyItemData,
  Project,
  ProjectName,
  SocialLink,
} from '@/types/portfolio.types'

import { generateRandomId } from '@/utils/general.utils'

import { i18n } from '@/constants/texts.constants'

const {
  projectsSection: projectsSectionI18n,
  ideologySection: ideologySectionI18n,
} = i18n

const getProjects = (): Record<ProjectName, Project> => {
  const projects: Record<ProjectName, Project> = {
    [ProjectName.SketchMate]: {
      id: 'sketchMate-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.SketchMate].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.SketchMate].description,
      technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
      links: {
        liveVersion: 'https://sketchmate-mnu9.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
        backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
      },
    },
    [ProjectName.Xpenser]: {
      id: 'xpenser-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.Xpenser].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.Xpenser].description,
      technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
      links: {
        liveVersion: 'https://xpenser-mpg1.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
        backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
      },
    },
    [ProjectName.Anyday]: {
      id: 'anyday-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.Anyday].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.Anyday].description,
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
      links: {
        liveVersion: 'https://anyday-lodf.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
        backend: 'https://github.com/AtarMor/Anyday',
      },
    },
  }

  return projects
}

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
  getProjects,
  getSocialLinks,
  getIdeologyItems,
}
