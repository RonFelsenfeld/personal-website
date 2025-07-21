import { SectionId } from '@/types/sitemap.types'

import { i18n } from '@/constants/texts.constants'

import {
  Heading,
  HeadingTag,
  HeadingType,
  Text,
  TextTag,
  TextType,
} from '@/components/UI'

import styles from './AboutMeSection.module.scss'

const { aboutMeSection: aboutMeSectionI18n } = i18n

const AboutMe = () => {
  return (
    <section
      id={SectionId.About}
      className={styles.aboutMeSection}
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <Heading htmlTag={HeadingTag.H1}>{aboutMeSectionI18n.name}</Heading>
          <Heading type={HeadingType.Subheading}>
            {aboutMeSectionI18n.role}
          </Heading>
        </header>

        <Text
          type={TextType.Secondary}
          htmlTag={TextTag.Span}
          className={styles.company}
        >
          {aboutMeSectionI18n.company}
        </Text>

        <Text className={styles.description}>
          {aboutMeSectionI18n.description}
        </Text>
      </div>
    </section>
  )
}

export default AboutMe
