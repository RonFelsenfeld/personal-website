'use client'

import { contactService } from '@/services/contact.service'

import { useForm } from '@/hooks/useForm'

import {
  ContactDetails,
  ContactInputConfiguration,
} from '@/types/contact.types'
import { ButtonVariant } from '@/types/button.types'

import { i18n } from '@/constants/texts.constants'

import { Button, Input } from '@/components/UI'

import styles from './ContactForm.module.scss'

const { contactSection: contactSectionI18n } = i18n
const { form } = contactSectionI18n

const defaultDetails = contactService.getDefaultContactDetails()

interface ContactFormProps {
  inputsConfigurations: ContactInputConfiguration[]
}

const ContactForm = ({ inputsConfigurations }: ContactFormProps) => {
  const [contactDetails, handleChange, onClearForm] =
    useForm<ContactDetails>(defaultDetails)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitting form...')
  }

  console.log(contactDetails)

  const InputFields = () => {
    return inputsConfigurations.map(({ id, name, placeholder, Icon }) => (
      <Input
        key={id}
        name={name}
        placeholder={placeholder}
        value={contactDetails[id]}
        onChange={handleChange}
        iconStart={<Icon />}
      />
    ))
  }

  const FormButtons = () => {
    return (
      <div className={styles.buttonsContainer}>
        <Button
          className={styles.formButton}
          type="submit"
        >
          {form.sendButton}
        </Button>

        <Button
          handleClick={onClearForm}
          variant={ButtonVariant.Secondary}
          className={styles.formButton}
          type="button"
        >
          {form.clearButton}
        </Button>
      </div>
    )
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={onSubmit}
    >
      <InputFields />
      <FormButtons />
    </form>
  )
}

export default ContactForm
