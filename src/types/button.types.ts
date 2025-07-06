// Note: Since the button props are used across the app, it's better to have them in a dedicated types file.

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface ButtonProps {
  children: React.ReactNode
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: ButtonType
  className?: string
}
