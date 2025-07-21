import Link from 'next/link'
import classNames from 'classnames'

import { sitemapService } from '@/services/sitemap.service'

import { ButtonVariant } from '@/types/button.types'
import { SitemapItem } from '@/types/sitemap.types'

import { getSectionLink } from '@/utils/sitemap.utils'

import { i18n } from '@/constants/texts.constants'

import { Button, Heading, HeadingTag, HeadingType, List } from '@/components/UI'

const { sitemap: sitemapI18n } = i18n

import styles from './Sitemap.module.scss'

export enum SitemapDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

interface SitemapProps {
  direction?: SitemapDirection
  withTitle?: boolean
}

const Sitemap = ({
  direction = SitemapDirection.Horizontal,
  withTitle,
}: SitemapProps) => {
  const renderSitemapItem = (item: SitemapItem) => (
    <Link href={getSectionLink(item.id)}>
      <Button
        variant={ButtonVariant.Link}
        className={styles.sitemapItem}
      >
        {item.label}
      </Button>
    </Link>
  )

  const isVertical = direction === SitemapDirection.Vertical

  return (
    <div className={classNames(styles.sitemap, styles[direction])}>
      {isVertical && withTitle && (
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
          className={styles.title}
        >
          {sitemapI18n.title}
        </Heading>
      )}

      <List
        items={sitemapService.getSitemap()}
        renderItem={renderSitemapItem}
        className={styles.sitemapList}
      />
    </div>
  )
}

export default Sitemap
