import classNames from 'classnames'

import styles from './Heading.module.scss'

export enum HeadingTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum HeadingType {
  Heading = 'heading',
  Subheading = 'subheading',
}

interface HeadingProps {
  children: React.ReactNode
  type?: HeadingType
  htmlTag?: HeadingTag
  className?: string
}

const HeadingClasses: Record<HeadingType, string> = {
  [HeadingType.Heading]: styles.heading,
  [HeadingType.Subheading]: styles.subheading,
}

const Heading = ({
  children,
  htmlTag = HeadingTag.H2,
  type = HeadingType.Heading,
  className,
}: HeadingProps) => {
  const HTMLTag = htmlTag

  return (
    <HTMLTag className={classNames(HeadingClasses[type], className)}>
      {children}
    </HTMLTag>
  )
}

export default Heading
