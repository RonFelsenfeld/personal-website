import classNames from 'classnames'

import { SectionId } from '@/types/sitemap.types'

import { Heading, Text } from '@/components/UI'

import styles from './SectionLayout.module.scss'

interface SectionLayoutProps {
  id: SectionId
  children: React.ReactNode
  title: string
  description?: string
  className?: string
}

const SectionLayout = ({
  id,
  children,
  title,
  description,
  className,
}: SectionLayoutProps) => {
  return (
    <section
      id={id}
      className={classNames(styles.sectionLayout, className)}
    >
      <header className={styles.header}>
        <Heading className={styles.title}>{title.toUpperCase()}</Heading>

        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
      </header>

      {children}
    </section>
  )
}

export default SectionLayout
