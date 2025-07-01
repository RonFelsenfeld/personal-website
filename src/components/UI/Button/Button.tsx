import classNames from 'classnames'

import styles from './Button.module.scss'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

const buttonClasses: Record<ButtonType, string> = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary,
}

interface ButtonProps {
  children: React.ReactNode
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: ButtonType
  className?: string
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
