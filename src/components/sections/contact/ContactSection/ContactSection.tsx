'use client'

import { contactService } from '@/services/contact.service'

import { SectionId } from '@/types/section.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'
import ContactForm from '../ContactForm/ContactForm'

import styles from './ContactSection.module.scss'

const { contactSection: contactSectionI18n } = i18n

const ContactSection = () => {
  const formConfiguration = contactService.getContactFormConfiguration()

  return (
    <SectionLayout
      id={SectionId.Contact}
      title={contactSectionI18n.title}
      description={contactSectionI18n.description}
      className={styles.contactSection}
    >
      <ContactForm formConfiguration={formConfiguration} />
    </SectionLayout>
  )
}

export default ContactSection
