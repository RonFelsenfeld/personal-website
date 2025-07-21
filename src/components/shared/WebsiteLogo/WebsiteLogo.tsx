import Image from 'next/image'
import classNames from 'classnames'

import { images } from '@/constants/images.constants'

import styles from './WebsiteLogo.module.scss'

interface WebsiteLogoProps {
  className?: string
}

const WebsiteLogo = ({ className }: WebsiteLogoProps) => {
  return (
    <Image
      src={images.shared.logo}
      alt="Website logo"
      className={classNames(styles.logo, className)}
    />
  )
}

export default WebsiteLogo
