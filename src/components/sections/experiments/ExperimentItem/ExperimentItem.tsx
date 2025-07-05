'use client'

import { Experiment } from '@/types/experiment.types'

import { i18n } from '@/constants/texts.constants'

import {
  Heading,
  HeadingTag,
  Text,
  TextTag,
  Button,
  ButtonType,
  HeadingType,
  Card,
  TextType,
} from '@/components/UI'

import styles from './ExperimentItem.module.scss'

const { experimentsSection: experimentsSectionI18n } = i18n

type LinkClickEvent = React.MouseEvent<
  HTMLElement | HTMLButtonElement,
  MouseEvent
>

interface ExperimentItemProps {
  experiment: Experiment
}

const ExperimentItem = ({ experiment }: ExperimentItemProps) => {
  const { title, description, metadata } = experiment
  const { technologies, repositoryLink } = metadata

  const handleLinkClick = (event: LinkClickEvent, url: string) => {
    event.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const ExperimentHeader = () => {
    return (
      <header className={styles.header}>
        <Heading
          htmlTag={HeadingTag.H3}
          type={HeadingType.Subheading}
          className={styles.title}
        >
          {title}
        </Heading>

        <Text
          type={TextType.Secondary}
          className={styles.description}
        >
          {description}
        </Text>
      </header>
    )
  }

  const ExperimentTechnologies = () => {
    return (
      <ul className={styles.technologies}>
        {technologies.map(tech => (
          <li key={tech}>
            <Text
              htmlTag={TextTag.Span}
              className={styles.techTag}
            >
              {tech}
            </Text>
          </li>
        ))}
      </ul>
    )
  }

  const ExperimentLinks = () => {
    return (
      <div className={styles.links}>
        <Button
          type={ButtonType.Primary}
          handleClick={e => handleLinkClick(e, repositoryLink)}
        >
          {experimentsSectionI18n.repositoryLink}
        </Button>
      </div>
    )
  }

  return (
    <Card
      className={styles.experimentItem}
      handleClick={e => handleLinkClick(e, repositoryLink)}
    >
      <ExperimentHeader />
      <ExperimentTechnologies />
      <ExperimentLinks />
    </Card>
  )
}

export default ExperimentItem
