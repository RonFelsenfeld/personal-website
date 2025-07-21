import classNames from 'classnames'

import { WebsiteLogo, Sitemap } from '@/components/shared'

import styles from './AppHeader.module.scss'

const AppHeader = () => {
  return (
    <header className={classNames(styles.appHeader, 'fullRow')}>
      <WebsiteLogo />

      <nav>
        <Sitemap />
      </nav>
    </header>
  )
}

export default AppHeader
