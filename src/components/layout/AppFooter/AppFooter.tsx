import Link from 'next/link'
import classNames from 'classnames'

import { sitemapService } from '@/services/sitemap.service'

import { ButtonVariant } from '@/types/button.types'
import { SitemapItem } from '@/types/sitemap.types'

import { getSectionLink } from '@/utils/navigation.utils'

import { i18n } from '@/constants/texts.constants'

import { Button, Heading, HeadingTag, HeadingType, List } from '@/components/UI'

import styles from './AppFooter.module.scss'

const { appFooter: appFooterI18n } = i18n

const AppFooter = () => {
  const renderSitemapItem = (item: SitemapItem) => (
    <Link href={getSectionLink(item.id)}>
      <Button variant={ButtonVariant.Link}>{item.label}</Button>
    </Link>
  )

  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <div className={styles.footerContent}>
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
          className={styles.sitemapTitle}
        >
          {appFooterI18n.sitemapTitle}
        </Heading>

        <List
          items={sitemapService.getSitemap()}
          renderItem={renderSitemapItem}
        />
      </div>
    </footer>
  )
}

export default AppFooter
