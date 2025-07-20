'use client'

import classNames from 'classnames'

import { ButtonProps, ButtonVariant } from '@/types/button.types'

import styles from './Button.module.scss'

const buttonClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: styles.primary,
  [ButtonVariant.Secondary]: styles.secondary,
  [ButtonVariant.Link]: styles.link,
}

const Button = ({
  children,
  handleClick,
  variant = ButtonVariant.Primary,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, buttonClasses[variant], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
