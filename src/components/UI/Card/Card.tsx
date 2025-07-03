'use client'

import classNames from 'classnames'

import styles from './Card.module.scss'

interface CardProps {
  children: React.ReactNode
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

const Card = ({ children, handleClick, className }: CardProps) => {
  return (
    <article
      className={classNames(styles.card, className)}
      onClick={handleClick}
    >
      {children}
    </article>
  )
}

export default Card
