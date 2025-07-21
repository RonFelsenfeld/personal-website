'use client'

import classNames from 'classnames'

import { getCopyrightText } from '@/utils/sitemap.utils'

import { i18n } from '@/constants/texts.constants'

import { Button, Text } from '@/components/UI'
import { Sitemap, SitemapDirection } from '@/components/shared'

import styles from './AppFooter.module.scss'
import { ButtonVariant } from '@/types/button.types'

const { appFooter: appFooterI18n } = i18n

const AppFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <div className={styles.footerContent}>
        <div className={styles.actionsContainer}>
          <Button
            variant={ButtonVariant.Secondary}
            handleClick={scrollToTop}
          >
            {appFooterI18n.backToTopButton}
          </Button>
        </div>

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
