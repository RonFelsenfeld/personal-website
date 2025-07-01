import classNames from 'classnames'

import { Heading, HeadingType } from '@/components/UI'

import styles from './SectionLayout.module.scss'

interface SectionLayoutProps {
  children: React.ReactNode
  title: string
  className?: string
}

const SectionLayout = ({ children, title, className }: SectionLayoutProps) => {
  return (
    <section className={classNames(styles.sectionLayout, className)}>
      <Heading
        type={HeadingType.Heading}
        className={styles.title}
      >
        {title.toUpperCase()}
      </Heading>

      {children}
    </section>
  )
}

export default SectionLayout
