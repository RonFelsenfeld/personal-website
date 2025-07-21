import Image from 'next/image'
import classNames from 'classnames'

import { images } from '@/constants/images.constants'

import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src={images.shared.logo}
      alt="Website logo"
      className={classNames(styles.logo, className)}
    />
  )
}

export default Logo
