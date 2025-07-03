import { SectionLayout } from '@/components/layouts'

import { i18n } from '@/constants/texts'

import styles from './ExperimentsSection.module.scss'

const { experimentsSection: experimentsSectionI18n } = i18n

const ExperimentsSection = () => {
  return (
    <SectionLayout
      title={experimentsSectionI18n.title}
      description={experimentsSectionI18n.description}
      className={styles.experimentsSection}
    >
      <p>Experiments</p>
    </SectionLayout>
  )
}

export default ExperimentsSection
