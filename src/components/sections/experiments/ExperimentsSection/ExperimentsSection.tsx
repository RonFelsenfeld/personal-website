import { Experiment } from '@/types/experiment.types'

import { portfolio } from '@/constants/portfolio.constants'
import { i18n } from '@/constants/texts'

import { SectionLayout } from '@/components/layouts'
import { List } from '@/components/UI'

import ExperimentItem from '../ExperimentItem/ExperimentItem'

import styles from './ExperimentsSection.module.scss'

const { experimentsSection: experimentsSectionI18n } = i18n
const { experimentsData } = portfolio

const ExperimentsSection = () => {
  const renderExperiment = (experiment: Experiment) => {
    return <ExperimentItem experiment={experiment} />
  }

  const experiments = Object.values(experimentsData)

  return (
    <SectionLayout
      title={experimentsSectionI18n.title}
      description={experimentsSectionI18n.description}
      className={styles.experimentsSection}
    >
      <List<Experiment>
        items={experiments}
        renderItem={renderExperiment}
        className={styles.experimentsList}
      />
    </SectionLayout>
  )
}

export default ExperimentsSection
