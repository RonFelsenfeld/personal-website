import { SectionId } from '@/types/sitemap.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'

import styles from './IdeologySection.module.scss'

const { ideologySection: ideologySectionI18n } = i18n

const IdeologySection = () => {
  return (
    <SectionLayout
      id={SectionId.Ideology}
      title={ideologySectionI18n.title}
      description={ideologySectionI18n.description}
      className={styles.ideologySection}
    >
      <p>Ideology</p>
    </SectionLayout>
  )
}

export default IdeologySection
