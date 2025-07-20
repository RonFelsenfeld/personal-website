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

const getContactFormInputsConfigurations = (): ContactInputConfiguration[] => [
  {
    id: 'fullName',
    name: 'fullName',
    placeholder: contactFormI18n.nameLabel,
    type: 'text',
    Icon: UserOutlined,
  },
  {
    id: 'email',
    name: 'email',
    placeholder: contactFormI18n.emailLabel,
    type: 'email',
    Icon: MailOutlined,
  },
  {
    id: 'subject',
    name: 'subject',
    placeholder: contactFormI18n.subjectLabel,
    type: 'text',
    Icon: EditOutlined,
  },
  {
    id: 'message',
    name: 'message',
    placeholder: contactFormI18n.messageLabel,
    type: 'text',
    Icon: MessageOutlined,
  },
]

export const contactService = {
  getDefaultContactDetails,
  getContactFormInputsConfigurations,
}
