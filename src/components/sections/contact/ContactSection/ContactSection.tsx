import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layouts'

import styles from './ContactSection.module.scss'

const { contactSection: contactSectionI18n } = i18n

const ContactSection = () => {
  return (
    <SectionLayout
      title={contactSectionI18n.title}
      className={styles.contactSection}
    >
      <p>hello from contact section</p>
    </SectionLayout>
  )
}

export default ContactSection
