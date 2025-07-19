import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className={styles.mainLayout}>{children}</main>
}

export default MainLayout
