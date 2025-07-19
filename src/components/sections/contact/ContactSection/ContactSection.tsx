import { SectionId } from '@/types/section.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'

import styles from './ContactSection.module.scss'

const { contactSection: contactSectionI18n } = i18n

const ContactSection = () => {
  return (
    <SectionLayout
      id={SectionId.Contact}
      title={contactSectionI18n.title}
      description={contactSectionI18n.description}
      className={styles.contactSection}
    >
      <p>hello from contact section</p>
    </SectionLayout>
  )
}

export default ContactSection
