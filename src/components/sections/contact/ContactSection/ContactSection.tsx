'use client'

import Image from 'next/image'

import { contactService } from '@/services/contact.service'

import { SectionId } from '@/types/section.types'

import { i18n } from '@/constants/texts.constants'
import { images } from '@/constants/images.constants'

import { SectionLayout } from '@/components/layout'
import ContactForm from '../ContactForm/ContactForm'

import styles from './ContactSection.module.scss'

const { contactSection: contactSectionI18n } = i18n

const ContactSection = () => {
  const inputsConfigurations =
    contactService.getContactFormInputsConfigurations()

  return (
    <SectionLayout
      id={SectionId.Contact}
      title={contactSectionI18n.title}
      description={contactSectionI18n.description}
      className={styles.contactSection}
    >
      <div className={styles.sectionContainer}>
        <ContactForm inputsConfigurations={inputsConfigurations} />

        <Image
          src={images.contactSection.contactFormImage}
          alt="Contact illustration image"
          className={styles.contactImage}
        />
      </div>
    </SectionLayout>
  )
}

export default ContactSection
