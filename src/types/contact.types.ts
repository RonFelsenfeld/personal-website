import { HTMLInputTypeAttribute } from 'react'

export interface ContactDetails {
  fullName: string
  email: string
  subject: string
  message: string
}

export interface ContactInputConfiguration {
  id: keyof ContactDetails
  name: keyof ContactDetails
  placeholder: string
  type: HTMLInputTypeAttribute
  Icon: React.ComponentType
}
