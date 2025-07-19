import Link from 'next/link'

import { SectionId } from '@/types/section.types'

import { i18n } from '@/constants/texts.constants'

import styles from './AppHeader.module.scss'

const { appHeader: appHeaderI18n } = i18n

const navigationItems = [
  { label: appHeaderI18n.links[SectionId.About], href: `#${SectionId.About}` },
  {
    label: appHeaderI18n.links[SectionId.Projects],
    href: `#${SectionId.Projects}`,
  },
  {
    label: appHeaderI18n.links[SectionId.Education],
    href: `#${SectionId.Education}`,
  },
  {
    label: appHeaderI18n.links[SectionId.Experiments],
    href: `#${SectionId.Experiments}`,
  },
]

const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {navigationItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.navigationLink}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader
