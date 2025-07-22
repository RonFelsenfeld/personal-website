import { IdeologyItemData } from '@/types/portfolio.types'

interface IdeologyItemProps {
  item: IdeologyItemData
}

const IdeologyItem = ({ item }: IdeologyItemProps) => {
  const { id, title, description, traits, Icon } = item

  return (
    <article key={id}>
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {traits.map(trait => (
          <li key={trait}>{trait}</li>
        ))}
      </ul>
    </article>
  )
}

export default IdeologyItem
