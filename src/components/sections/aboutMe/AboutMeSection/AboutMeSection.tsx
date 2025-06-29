import { i18n } from '@/constants/texts'

import { Heading, Subheading, Text } from '@/components/UI'

import styles from './AboutMeSection.module.scss'

const { aboutMeSection: aboutMeSectionI18n } = i18n

const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Heading>{aboutMeSectionI18n.name}</Heading>
          <Subheading>{aboutMeSectionI18n.role}</Subheading>
        </header>

        <Text className={styles.company}>{aboutMeSectionI18n.company}</Text>
        <Text className={styles.description}>
          {aboutMeSectionI18n.description}
        </Text>
      </div>
    </section>
  )
}

export default AboutMe
