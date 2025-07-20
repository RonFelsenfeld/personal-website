import Link from 'next/link'
import classNames from 'classnames'

import { SectionId } from '@/types/section.types'
import { NavigationLink } from '../../../types/navigation.types'

import { getSectionLink } from '@/utils/navigation.utils'

import { i18n } from '@/constants/texts.constants'

import { Button, List } from '@/components/UI'

import styles from './AppHeader.module.scss'
import { ButtonVariant } from '@/types/button.types'

const { appHeader: appHeaderI18n } = i18n

const navigationLinks: NavigationLink[] = [
  {
    id: SectionId.About,
    label: appHeaderI18n.links[SectionId.About],
  },
  {
    id: SectionId.Projects,
    label: appHeaderI18n.links[SectionId.Projects],
  },
  {
    id: SectionId.Education,
    label: appHeaderI18n.links[SectionId.Education],
  },
  {
    id: SectionId.Experiments,
    label: appHeaderI18n.links[SectionId.Experiments],
  },
  {
    id: SectionId.Contact,
    label: appHeaderI18n.links[SectionId.Contact],
  },
]

const AppHeader = () => {
  const renderNavigationLink = (link: NavigationLink) => (
    <Link href={getSectionLink(link.id)}>
      <Button variant={ButtonVariant.Link}>{link.label}</Button>
    </Link>
  )

  return (
    <header className={classNames(styles.appHeader, 'fullRow')}>
      <nav className={styles.navigation}>
        <List
          items={navigationLinks}
          renderItem={renderNavigationLink}
          className={styles.navigationList}
        />
      </nav>
    </header>
  )
}

export default AppHeader
