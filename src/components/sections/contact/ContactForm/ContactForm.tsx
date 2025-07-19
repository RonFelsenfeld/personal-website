'use client'

import { contactService } from '@/services/contact.service'

import { useForm } from '@/hooks/useForm'

import {
  ContactDetails,
  ContactInputConfiguration,
} from '@/types/contact.types'

import { Input } from '@/components/UI'

import styles from './ContactForm.module.scss'

interface ContactFormProps {
  formConfiguration: ContactInputConfiguration[]
}

const ContactForm = ({ formConfiguration }: ContactFormProps) => {
  const [fields, handleChange] = useForm<ContactDetails>(
    contactService.getDefaultContactDetails()
  )

  return (
    <form className={styles.contactForm}>
      {formConfiguration.map(({ id, name, placeholder, Icon }) => (
        <Input
          key={id}
          name={name}
          placeholder={placeholder}
          value={fields[id]}
          onChange={handleChange}
          iconStart={<Icon />}
        />
      ))}
    </form>
  )
}

export default ContactForm
