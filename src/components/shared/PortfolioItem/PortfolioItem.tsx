'use client'

import { PortfolioItemData } from '@/types/portfolio.types'

import {
  Heading,
  HeadingTag,
  HeadingType,
  Text,
  TextTag,
  TextType,
} from '@/components/UI'

import styles from './PortfolioItem.module.scss'

interface PortfolioItemProps {
  item: PortfolioItemData
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  const ItemHeader = () => {
    return (
      <header className={styles.header}>
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
          className={styles.title}
        >
          {item.title}
        </Heading>

        <Text
          type={TextType.Secondary}
          className={styles.description}
        >
          {item.description}
        </Text>
      </header>
    )
  }

  const ItemTechnologies = () => {
    const { technologies } = item.metadata

    return (
      <ul className={styles.technologies}>
        {technologies.map(tech => (
          <li key={tech}>
            <Text
              htmlTag={TextTag.Span}
              className={styles.techTag}
            >
              {tech}
            </Text>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <article className={styles.portfolioItem}>
      <ItemHeader />
      <ItemTechnologies />
    </article>
  )
}

export default PortfolioItem
