import { CheckOutlined } from '@ant-design/icons'

import { IdeologyItemData, IdeologyTrait } from '@/types/portfolio.types'

import { Heading, HeadingTag, HeadingType, List, Text } from '@/components/UI'

import styles from './IdeologyItem.module.scss'

interface IdeologyItemProps {
  item: IdeologyItemData
}

const IdeologyItem = ({ item }: IdeologyItemProps) => {
  const { id, title, phrase, description, traits, Icon } = item

  const renderTrait = (trait: IdeologyTrait) => {
    return (
      <div className={styles.traitContainer}>
        <CheckOutlined className={styles.traitIcon} />
        <Text>{trait.title}</Text>
      </div>
    )
  }

  const ItemHeader = () => {
    return (
      <header className={styles.header}>
        <Icon className={styles.icon} />
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
        >
          {title}
        </Heading>
      </header>
    )
  }

  const ItemContent = () => {
    return (
      <div className={styles.content}>
        <Text className={styles.phrase}>{phrase}</Text>
        <Text>{description}</Text>
      </div>
    )
  }

  return (
    <article
      key={id}
      className={styles.ideologyItem}
    >
      <ItemHeader />
      <ItemContent />
      <List
        items={traits}
        renderItem={renderTrait}
        className={styles.traitsList}
      />
    </article>
  )
}

export default IdeologyItem
