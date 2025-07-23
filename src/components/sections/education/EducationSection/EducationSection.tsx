import { EducationItemData } from '@/types/portfolio.types'
import { SectionId } from '@/types/sitemap.types'

import { educationData } from '@/constants/education.constants'
import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'
import { List } from '@/components/UI'

import EducationItem from '../EducationItem/EducationItem'

import styles from './EducationSection.module.scss'

const { educationSection: educationSectionI18n } = i18n

const EducationSection = () => {
  const renderEducationItem = (educationItem: EducationItemData) => {
    return <EducationItem educationItem={educationItem} />
  }

  const educationItems = Object.values(educationData)
  return (
    <SectionLayout
      id={SectionId.Education}
      title={educationSectionI18n.title}
      description={educationSectionI18n.description}
      className={styles.educationSection}
    >
      <List<EducationItemData>
        items={educationItems}
        renderItem={renderEducationItem}
        className={styles.educationList}
      />
    </SectionLayout>
  )
}

export default EducationSection
