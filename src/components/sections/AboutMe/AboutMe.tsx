import { i18n } from '@/constants/texts'

import { Heading, Subheading, Text } from '@/components/UI'

import styles from './AboutMe.module.scss'

const { aboutMe: aboutMeI18n } = i18n

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Heading className={styles.name}>{aboutMeI18n.name}</Heading>

          <Subheading className={styles.role}>{aboutMeI18n.role}</Subheading>
        </header>

        <Text className={styles.company}>{aboutMeI18n.company}</Text>
        <Text className={styles.description}>{aboutMeI18n.description}</Text>
      </div>
    </section>
  )
}

export default AboutMe
