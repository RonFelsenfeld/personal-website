import React from 'react'
import styles from './Heading.module.scss'

interface HeadingProps {
  children: React.ReactNode
  className?: string
}

const Heading = ({ children, className = '' }: HeadingProps) => {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>
}

export default Heading
