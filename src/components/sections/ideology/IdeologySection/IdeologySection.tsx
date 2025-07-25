import { portfolioService } from '@/services/portfolio.service'

import { IdeologyItemData } from '@/types/portfolio.types'
import { SectionId } from '@/types/sitemap.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'
import IdeologyItem from '../IdeologyItem/IdeologyItem'

import styles from './IdeologySection.module.scss'

const { ideologySection: ideologySectionI18n } = i18n

const IdeologySection = () => {
  const ideologyItems = portfolioService.getIdeologyItems()

  const renderIdeologyItem = (item: IdeologyItemData) => {
    return (
      <IdeologyItem
        key={item.id}
        item={item}
      />
    )
  }

  return (
    <SectionLayout
      id={SectionId.Ideology}
      title={ideologySectionI18n.title}
      description={ideologySectionI18n.description}
      className={styles.ideologySection}
    >
      {ideologyItems.map(renderIdeologyItem)}
    </SectionLayout>
  )
}

export default IdeologySection
