import classNames from 'classnames'

import styles from './Heading.module.scss'

interface HeadingProps {
  children: React.ReactNode
  className?: string
}

const Heading = ({ children, className }: HeadingProps) => {
  return <h2 className={classNames(styles.heading, className)}>{children}</h2>
}

export default Heading
