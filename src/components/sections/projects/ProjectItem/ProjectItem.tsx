import { Project } from '@/types/project.types'
import { LinkConfiguration, PortfolioItemData } from '@/types/portfolio.types'
import { ButtonVariant } from '@/types/button.types'

import { i18n } from '@/constants/texts.constants'

import { PortfolioItem } from '@/components/shared'

const { projectsSection: projectsSectionI18n } = i18n
const { buttons: buttonsI18n } = projectsSectionI18n

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { links } = project

  const linksConfigurations: LinkConfiguration[] = [
    {
      id: 'live-version',
      link: links.liveVersion,
      buttonProps: {
        variant: ButtonVariant.Primary,
        children: buttonsI18n.viewProject,
      },
    },
    {
      id: 'frontend',
      link: links.frontend,
      buttonProps: {
        variant: ButtonVariant.Secondary,
        children: buttonsI18n.frontend,
      },
    },
    {
      id: 'backend',
      link: links.backend,
      buttonProps: {
        variant: ButtonVariant.Secondary,
        children: buttonsI18n.backend,
      },
    },
  ]

  const projectData: PortfolioItemData = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    linksConfigurations,
  }

  return <PortfolioItem item={projectData} />
}

export default ProjectItem
