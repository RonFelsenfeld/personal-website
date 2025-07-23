import { EducationItemData } from '@/types/portfolio.types'

import { formatDate } from '@/utils/general.utils'

import {
  Heading,
  HeadingTag,
  HeadingType,
  Text,
  TextTag,
  TextType,
} from '@/components/UI'

import styles from './EducationItem.module.scss'

interface EducationItemProps {
  educationItem: EducationItemData
}

const EducationItem = ({ educationItem }: EducationItemProps) => {
  const { title, description, institution, skills, completedAt, isFavorite } =
    educationItem

  const ItemHeader = () => {
    return (
      <header className={styles.header}>
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
        >
          {title}
        </Heading>

        <Text type={TextType.Secondary}>{description}</Text>
      </header>
    )
  }

  const ItemDetails = () => {
    const formattedCompletedAt = formatDate(completedAt)

    return (
      <div className={styles.detailsContainer}>
        <Text className={styles.institution}>{institution}</Text>
        <Text className={styles.completedAt}>{formattedCompletedAt}</Text>

        <ul className={styles.skills}>
          {skills.map(skill => (
            <li key={skill}>
              <Text
                htmlTag={TextTag.Span}
                type={TextType.Secondary}
                className={styles.skill}
              >
                {skill}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const FavoriteLabel = () => {
    return (
      <div className={styles.favoriteLabel}>
        <Text type={TextType.Secondary}>⭐️</Text>
      </div>
    )
  }

  return (
    <article className={styles.educationItem}>
      {isFavorite && <FavoriteLabel />}
      <ItemHeader />
      <ItemDetails />
    </article>
  )
}

export default EducationItem
