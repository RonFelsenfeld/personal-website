import classNames from 'classnames'

import { Sitemap, SitemapDirection } from '@/components/shared'

import styles from './AppFooter.module.scss'

const AppFooter = () => {
  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <div className={styles.footerContent}>
        <Sitemap
          direction={SitemapDirection.Vertical}
          withTitle
        />
      </div>
    </footer>
  )
}

export default AppFooter
