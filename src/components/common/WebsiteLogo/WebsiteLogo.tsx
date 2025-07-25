import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { SectionId } from '@/types/sitemap.types'

import { getSectionLink } from '@/utils/sitemap.utils'

import { images } from '@/constants/images.constants'

import styles from './WebsiteLogo.module.scss'

interface WebsiteLogoProps {
  className?: string
}

const WebsiteLogo = ({ className }: WebsiteLogoProps) => {
  return (
    <Link
      href={getSectionLink(SectionId.About)}
      className={styles.logoContainer}
    >
      <Image
        src={images.common.logo}
        alt="Website logo"
        className={classNames(styles.logo, className)}
      />
    </Link>
  )
}

export default WebsiteLogo
