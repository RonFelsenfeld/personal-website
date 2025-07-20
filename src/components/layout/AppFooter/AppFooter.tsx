import classNames from 'classnames'

import styles from './AppFooter.module.scss'

const AppFooter = () => {
  return (
    <footer className={classNames(styles.appFooter, 'fullRow')}>
      <p>Footer</p>
    </footer>
  )
}

export default AppFooter
