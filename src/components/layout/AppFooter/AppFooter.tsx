import classNames from 'classnames'

import { getCopyrightText } from '@/utils/sitemap.utils'

import { i18n } from '@/constants/texts.constants'

import { Text } from '@/components/UI'
import { Sitemap, SitemapDirection } from '@/components/shared'

import styles from './AppFooter.module.scss'

const { appFooter: appFooterI18n } = i18n

const AppFooter = () => {
  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <div className={styles.footerContent}>
        <Sitemap
          direction={SitemapDirection.Vertical}
          withTitle
        />
      </div>

      <Text className={classNames(styles.copyrights, 'fullRow')}>
        {getCopyrightText(appFooterI18n.copyrights)}
      </Text>
    </footer>
  )
}

export default AppFooter
