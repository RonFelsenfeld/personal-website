import { Experiment } from '@/types/experiment.types'

import styles from './ExperimentItem.module.scss'

interface ExperimentItemProps {
  experiment: Experiment
}

const ExperimentItem = ({ experiment }: ExperimentItemProps) => {
  console.log('experiment:', experiment)

  return (
    <section className={styles.experimentItem}>
      Hello from ExperimentItem
    </section>
  )
}

export default ExperimentItem
