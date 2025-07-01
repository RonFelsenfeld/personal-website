import { i18n } from '@/constants/texts'

import { Heading, Text } from '@/components/UI'

import styles from './AboutMeSection.module.scss'
import { HeadingTag, HeadingType } from '@/components/UI/Heading/Heading'

const { aboutMeSection: aboutMeSectionI18n } = i18n

const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Heading htmlTag={HeadingTag.H1}>{aboutMeSectionI18n.name}</Heading>
          <Heading type={HeadingType.Subheading}>
            {aboutMeSectionI18n.role}
          </Heading>
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
