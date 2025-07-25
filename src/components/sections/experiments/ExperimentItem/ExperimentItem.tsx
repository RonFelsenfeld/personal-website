import { Experiment } from '@/types/portfolio.types'
import {
  PortfolioLinkConfiguration,
  PortfolioItemData,
} from '@/types/portfolio.types'

import { i18n } from '@/constants/texts.constants'

import { PortfolioItem } from '@/components/common'

const { experimentsSection: experimentsSectionI18n } = i18n
interface ExperimentItemProps {
  experiment: Experiment
}

const ExperimentItem = ({ experiment }: ExperimentItemProps) => {
  const linksConfigurations: PortfolioLinkConfiguration[] = [
    {
      id: 'repository',
      link: experiment.repositoryLink,
      buttonProps: {
        children: experimentsSectionI18n.repositoryLink,
      },
    },
  ]

  const experimentData: PortfolioItemData = {
    id: experiment.id,
    title: experiment.title,
    description: experiment.description,
    technologies: experiment.technologies,
    linksConfigurations,
  }

  return <PortfolioItem item={experimentData} />
}

export default ExperimentItem
