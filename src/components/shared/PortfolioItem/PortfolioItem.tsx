'use client'

import Link from 'next/link'

import { PortfolioItemData } from '@/types/portfolio.types'

import {
  Button,
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
    const { technologies } = item

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

  const ItemLinks = () => {
    const { linksConfigurations } = item

    return (
      <div className={styles.links}>
        {linksConfigurations.map(linkConfiguration => (
          <Link
            key={linkConfiguration.id}
            href={linkConfiguration.link}
            target="_blank"
          >
            <Button variant={linkConfiguration.buttonProps.variant}>
              {linkConfiguration.buttonProps.children}
            </Button>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <article className={styles.portfolioItem}>
      <ItemHeader />
      <ItemTechnologies />
      <ItemLinks />
    </article>
  )
}

export default PortfolioItem
