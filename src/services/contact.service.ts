import {
  ContactDetails,
  ContactInputConfiguration,
} from '@/types/contact.types'

import { i18n } from '@/constants/texts.constants'

const { contactSection: contactSectionI18n } = i18n
const { form: contactFormI18n } = contactSectionI18n

const getDefaultContactDetails = (): ContactDetails => ({
  fullName: '',
  email: '',
  message: '',
  subject: '',
})

const getContactFormConfiguration = (): ContactInputConfiguration[] => [
  {
    id: 'fullName',
    name: 'fullName',
    placeholder: contactFormI18n.nameLabel,
    isRequired: true,
  },
  {
    id: 'email',
    name: 'email',
    placeholder: contactFormI18n.emailLabel,
    isRequired: true,
  },
  {
    id: 'subject',
    name: 'subject',
    placeholder: contactFormI18n.subjectLabel,
    isRequired: false,
  },
  {
    id: 'message',
    name: 'message',
    placeholder: contactFormI18n.messageLabel,
    isRequired: true,
  },
]

export const contactService = {
  getDefaultContactDetails,
  getContactFormConfiguration,
}
