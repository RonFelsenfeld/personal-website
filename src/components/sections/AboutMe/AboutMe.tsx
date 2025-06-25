import classNames from 'classnames'

import { Heading, Subheading, Text } from '@/components/UI'

import styles from './AboutMe.module.scss'

const AboutMe = ({ className }: { className?: string }) => {
  return (
    <section className={classNames(styles.aboutMe, className)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Heading className={styles.name}>Ron Felsenfeld</Heading>
          <Subheading className={styles.role}>Full Stack Developer</Subheading>

          <Text className={styles.company}>Working at DevBoost</Text>

          <Text className={styles.description}>
            AI enthusiast and graduate of Coding Academy - A full stack
            bootcamp. Passionate about building modern web applications and
            exploring the latest technologies.
          </Text>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
