import Link from 'next/link'
import classNames from 'classnames'

import { sitemapService } from '@/services/sitemap.service'

import { ButtonVariant } from '@/types/button.types'
import { SitemapItem } from '@/types/sitemap.types'

import { getSectionLink } from '@/utils/navigation.utils'

import { Button, List } from '@/components/UI'

import styles from './AppHeader.module.scss'

const AppHeader = () => {
  const renderSitemapItem = (item: SitemapItem) => (
    <Link href={getSectionLink(item.id)}>
      <Button variant={ButtonVariant.Link}>{item.label}</Button>
    </Link>
  )

  return (
    <header className={classNames(styles.appHeader, 'fullRow')}>
      <nav className={styles.navigation}>
        <List
          items={sitemapService.getSitemap()}
          renderItem={renderSitemapItem}
          className={styles.navigationList}
        />
      </nav>
    </header>
  )
}

export default AppHeader
