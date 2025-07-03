import classNames from 'classnames'

import { Heading, HeadingType, Text } from '@/components/UI'

import styles from './SectionLayout.module.scss'

interface SectionLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  className?: string
}

const SectionLayout = ({
  children,
  title,
  description,
  className,
}: SectionLayoutProps) => {
  return (
    <section className={classNames(styles.sectionLayout, className)}>
      <header className={styles.header}>
        <Heading
          type={HeadingType.Heading}
          className={styles.title}
        >
          {title.toUpperCase()}
        </Heading>

        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
      </header>

      {children}
    </section>
  )
}

export default SectionLayout
