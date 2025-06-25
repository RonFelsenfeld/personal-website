import React from 'react'
import styles from './Text.module.scss'

interface TextProps {
  children: React.ReactNode
  className?: string
}

const Text = ({ children, className = '' }: TextProps) => {
  return <p className={`${styles.text} ${className}`}>{children}</p>
}

export default Text
