import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
type InputValue = string | number | boolean

type UseFromResult<T> = [
  T,
  (event: InputChangeEvent) => void,
  Dispatch<SetStateAction<T>>
]

export const useForm = <T>(initialState: T): UseFromResult<T> => {
  const [fields, setFields] = useState<T>(initialState)

  function handleChange({ target }: InputChangeEvent) {
    const { name, value, type } = target

    let inputRawValue: InputValue = value

    switch (type) {
      case 'number':
      case 'range':
        inputRawValue = value === '' ? '' : Number(value)
        break
      case 'checkbox':
        inputRawValue = (target as HTMLInputElement).checked
        break
      default:
        inputRawValue = value
        break
    }

    setFields(prevFields => ({
      ...prevFields,
      [name]: inputRawValue,
    }))
  }

  return [fields, handleChange, setFields]
}
