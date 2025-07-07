import { EducationItemData } from '@/types/education.types'

import styles from './EducationItem.module.scss'

interface EducationItemProps {
  educationItem: EducationItemData
}

const EducationItem = ({ educationItem }: EducationItemProps) => {
  return (
    <section className={styles.educationItem}>
      <h3>{educationItem.title}</h3>
    </section>
  )
}

export default EducationItem
