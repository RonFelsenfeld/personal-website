'use client'

import classNames from 'classnames'

import { ButtonProps, ButtonType } from '@/types/button.types'

import styles from './Button.module.scss'

const buttonClasses: Record<ButtonType, string> = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary,
}

const Button = ({
  children,
  handleClick,
  type = ButtonType.Primary,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, buttonClasses[type], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
