import { Experiment } from '@/types/experiment.types'
import { LinkConfiguration, PortfolioItemData } from '@/types/portfolio.types'

import { i18n } from '@/constants/texts.constants'

import { PortfolioItem } from '@/components/shared'

const { experimentsSection: experimentsSectionI18n } = i18n
interface ExperimentItemProps {
  experiment: Experiment
}

const ExperimentItem = ({ experiment }: ExperimentItemProps) => {
  const linksConfigurations: LinkConfiguration[] = [
    {
      id: 'repository',
      link: experiment.metadata.repositoryLink,
      buttonProps: {
        children: experimentsSectionI18n.repositoryLink,
      },
    },
  ]

  const experimentData: PortfolioItemData = {
    id: experiment.id,
    title: experiment.title,
    description: experiment.description,
    technologies: experiment.metadata.technologies,
    linksConfigurations,
  }

  return <PortfolioItem item={experimentData} />
}

export default ExperimentItem
