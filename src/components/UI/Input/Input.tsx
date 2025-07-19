import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import classNames from 'classnames'

import styles from './Input.module.scss'

interface InputProps extends AntdInputProps {
  className?: string
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <AntdInput
      className={classNames(styles.input, className)}
      {...props}
    />
  )
}

export default Input
