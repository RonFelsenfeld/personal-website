import classNames from 'classnames'

import { Heading } from '@/components/UI'

import styles from './SectionLayout.module.scss'
import { HeadingType } from '@/components/UI/Heading/Heading'

interface SectionLayoutProps {
  children: React.ReactNode
  title: string
  className?: string
}

const SectionLayout = ({ children, title, className }: SectionLayoutProps) => {
  return (
    <section className={classNames(styles.sectionLayout, className)}>
      <Heading
        type={HeadingType.Subheading}
        className={styles.title}
      >
        {title}
      </Heading>

      {children}
    </section>
  )
}

export default SectionLayout
