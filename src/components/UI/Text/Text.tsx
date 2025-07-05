import classNames from 'classnames'

import styles from './Text.module.scss'

export enum TextTag {
  P = 'p',
  Span = 'span',
}

export enum TextType {
  Primary = 'primary',
  Secondary = 'secondary',
}

const textClasses: Record<TextType, string> = {
  [TextType.Primary]: styles.primary,
  [TextType.Secondary]: styles.secondary,
}

interface TextProps {
  children: React.ReactNode
  type?: TextType
  htmlTag?: TextTag
  className?: string
}

const Text = ({
  children,
  type = TextType.Primary,
  htmlTag = TextTag.P,
  className,
}: TextProps) => {
  const HTMLTag = htmlTag

  return (
    <HTMLTag className={classNames(styles.text, textClasses[type], className)}>
      {children}
    </HTMLTag>
  )
}

export default Text
