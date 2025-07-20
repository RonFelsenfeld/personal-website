// Note: Since the button props are used across the app, it's better to have them in a dedicated types file.

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Link = 'link',
}

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'handleClick'
>

// Note: handleClick is optional because it's not always needed (e.g. in the case of a submit button)
export interface ButtonProps extends NativeButtonProps {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  variant?: ButtonVariant
}
