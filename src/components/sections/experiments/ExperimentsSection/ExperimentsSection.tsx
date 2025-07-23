import { portfolioService } from '@/services/portfolio.service'

import { Experiment } from '@/types/portfolio.types'
import { SectionId } from '@/types/sitemap.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'
import { List } from '@/components/UI'

import ExperimentItem from '../ExperimentItem/ExperimentItem'

import styles from './ExperimentsSection.module.scss'

const { experimentsSection: experimentsSectionI18n } = i18n

const ExperimentsSection = () => {
  const experimentsData = portfolioService.getExperiments()

  const renderExperiment = (experiment: Experiment) => {
    return <ExperimentItem experiment={experiment} />
  }

  return (
    <SectionLayout
      id={SectionId.Experiments}
      title={experimentsSectionI18n.title}
      description={experimentsSectionI18n.description}
      className={styles.experimentsSection}
    >
      <List<Experiment>
        items={Object.values(experimentsData)}
        renderItem={renderExperiment}
        className={styles.experimentsList}
      />
    </SectionLayout>
  )
}

export default ExperimentsSection
