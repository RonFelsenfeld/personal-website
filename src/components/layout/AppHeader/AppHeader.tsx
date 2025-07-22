import classNames from 'classnames'

import { sitemapService } from '@/services/sitemap.service'

import { WebsiteLogo, Sitemap } from '@/components/shared'

import styles from './AppHeader.module.scss'

const AppHeader = () => {
  return (
    <header className={classNames(styles.appHeader, 'fullRow')}>
      <WebsiteLogo />

      <nav>
        <Sitemap sitemapLinks={sitemapService.getSitemapLinks()} />
      </nav>
    </header>
  )
}

export default AppHeader
