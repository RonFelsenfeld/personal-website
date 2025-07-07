import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layouts'

import styles from './EducationSection.module.scss'

const { educationSection: educationSectionI18n } = i18n

const EducationSection = () => {
  return (
    <SectionLayout
      title={educationSectionI18n.title}
      description={educationSectionI18n.description}
      className={styles.projectsSection}
    >
      <p>Hello from EducationSection</p>
    </SectionLayout>
  )
}

export default EducationSection
