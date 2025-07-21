'use client'

import classNames from 'classnames'
import Link from 'next/link'

import { portfolioService } from '@/services/portfolio.service'

import { ButtonVariant } from '@/types/button.types'

import { getCopyrightText } from '@/utils/sitemap.utils'
import { formatQuote } from '@/utils/general.utils'

import { i18n } from '@/constants/texts.constants'

import { Button, Text, TextTag } from '@/components/UI'
import { Logo, Sitemap, SitemapDirection } from '@/components/shared'

import styles from './AppFooter.module.scss'

const { appFooter: appFooterI18n } = i18n

const AppFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = portfolioService.getSocialLinks()

  const SocialLinks = () => {
    return (
      <div className={styles.socialsContainer}>
        {socialLinks.map(({ title, href, Icon }) => (
          <Link
            key={href}
            href={href}
            title={title}
            target="_blank"
          >
            <Icon className={styles.icon} />
          </Link>
        ))}
      </div>
    )
  }

  const Quote = () => {
    return (
      <div className={styles.quote}>
        <Text>{formatQuote(appFooterI18n.quote.text)}</Text>
        <Text htmlTag={TextTag.Span}>{appFooterI18n.quote.author}</Text>
      </div>
    )
  }

  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <div className={styles.footerContent}>
        <div className={styles.actionsContainer}>
          <Logo />
          <Quote />

          <SocialLinks />

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
