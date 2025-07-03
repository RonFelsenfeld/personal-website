import classNames from 'classnames'

import styles from './List.module.scss'

interface ObjectWithId {
  id: string
}

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  className?: string
}

const List = <T extends ObjectWithId>({
  items,
  renderItem,
  className,
}: ListProps<T>) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {items.map(item => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List
