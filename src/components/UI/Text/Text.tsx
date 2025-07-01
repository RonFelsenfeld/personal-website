import classNames from 'classnames'

import styles from './Text.module.scss'

export enum TextTag {
  P = 'p',
  Span = 'span',
}

interface TextProps {
  children: React.ReactNode
  htmlTag?: TextTag
  className?: string
}

const Text = ({ children, htmlTag = TextTag.P, className }: TextProps) => {
  const HTMLTag = htmlTag

  return (
    <HTMLTag className={classNames(styles.text, className)}>{children}</HTMLTag>
  )
}

export default Text
