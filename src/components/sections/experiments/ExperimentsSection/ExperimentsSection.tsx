import { Experiment } from '@/types/experiment.types'

import { mergeExperimentsTextsAndMetadata } from '@/utils/experiments.utils'

import { experimentsMetadata } from '@/constants/experiments'
import { i18n } from '@/constants/texts'

import { SectionLayout } from '@/components/layouts'
import { List } from '@/components/UI'

import ExperimentItem from '../ExperimentItem/ExperimentItem'

import styles from './ExperimentsSection.module.scss'

const { experimentsSection: experimentsSectionI18n } = i18n
const { title, description, experimentsTexts } = experimentsSectionI18n

const ExperimentsSection = () => {
  const experiments = mergeExperimentsTextsAndMetadata(
    experimentsTexts,
    experimentsMetadata
  )

  const renderExperiment = (experiment: Experiment) => {
    return <ExperimentItem experiment={experiment} />
  }

  return (
    <SectionLayout
      title={title}
      description={description}
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
