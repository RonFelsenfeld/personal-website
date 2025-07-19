import {
  MailOutlined,
  UserOutlined,
  EditOutlined,
  MessageOutlined,
} from '@ant-design/icons'

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
    Icon: UserOutlined,
  },
  {
    id: 'email',
    name: 'email',
    placeholder: contactFormI18n.emailLabel,
    isRequired: true,
    Icon: MailOutlined,
  },
  {
    id: 'subject',
    name: 'subject',
    placeholder: contactFormI18n.subjectLabel,
    isRequired: false,
    Icon: EditOutlined,
  },
  {
    id: 'message',
    name: 'message',
    placeholder: contactFormI18n.messageLabel,
    isRequired: true,
    Icon: MessageOutlined,
  },
]

export const contactService = {
  getDefaultContactDetails,
  getContactFormConfiguration,
}
