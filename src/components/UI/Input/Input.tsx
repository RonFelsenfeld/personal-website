import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import classNames from 'classnames'

import styles from './Input.module.scss'

interface InputProps extends Omit<AntdInputProps, 'prefix' | 'suffix'> {
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  className?: string
}

const Input = ({ iconStart, iconEnd, className, ...props }: InputProps) => {
  return (
    <AntdInput
      className={classNames(styles.inputContainer, className)}
      prefix={iconStart}
      suffix={iconEnd}
      {...props}
    />
  )
}

export default Input
