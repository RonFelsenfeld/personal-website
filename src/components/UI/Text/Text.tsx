import classNames from 'classnames'

import styles from './Text.module.scss'

interface TextProps {
  children: React.ReactNode
  className?: string
}

const Text = ({ children, className }: TextProps) => {
  return <p className={classNames(styles.text, className)}>{children}</p>
}

export default Text
