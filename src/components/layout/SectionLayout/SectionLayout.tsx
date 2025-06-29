import classNames from 'classnames'

import { Subheading } from '@/components/UI'

import styles from './SectionLayout.module.scss'

interface SectionLayoutProps {
  children: React.ReactNode
  title: string
  className?: string
}

const SectionLayout = ({ children, title, className }: SectionLayoutProps) => {
  return (
    <section className={classNames(styles.sectionLayout, className)}>
      <Subheading className={styles.title}>{title}</Subheading>

      {children}
    </section>
  )
}

export default SectionLayout
