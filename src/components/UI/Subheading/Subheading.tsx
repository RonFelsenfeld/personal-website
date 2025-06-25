import React from 'react'
import styles from './Subheading.module.scss'

interface SubheadingProps {
  children: React.ReactNode
  className?: string
}

const Subheading = ({ children, className = '' }: SubheadingProps) => {
  return <h3 className={`${styles.subheading} ${className}`}>{children}</h3>
}

export default Subheading
