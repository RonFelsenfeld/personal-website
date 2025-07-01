'use client'

import { Project } from '@/types/project.types'

import { i18n } from '@/constants/texts'

import {
  Heading,
  HeadingTag,
  Text,
  TextTag,
  Button,
  ButtonType,
} from '@/components/UI'

import styles from './ProjectItem.module.scss'

const { projectsSection: projectsSectionI18n } = i18n
const { buttons: buttonsI18n } = projectsSectionI18n

type LinkClickEvent = React.MouseEvent<
  HTMLElement | HTMLButtonElement,
  MouseEvent
>

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { title, description, metadata } = project
  const { technologies, links } = metadata

  const handleLinkClick = (event: LinkClickEvent, url: string) => {
    event.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const ProjectHeader = () => {
    return (
      <header className={styles.header}>
        <Heading
          htmlTag={HeadingTag.H3}
          className={styles.title}
        >
          {title}
        </Heading>

        <Text className={styles.description}>{description}</Text>
      </header>
    )
  }

  const ProjectTechnologies = () => {
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

  const ProjectLinks = () => {
    return (
      <div className={styles.links}>
        <Button
          type={ButtonType.Primary}
          handleClick={e => handleLinkClick(e, links.liveVersion)}
        >
          {buttonsI18n.viewProject}
        </Button>

        <Button
          type={ButtonType.Secondary}
          handleClick={e => handleLinkClick(e, links.frontend)}
        >
          {buttonsI18n.frontend}
        </Button>

        <Button
          type={ButtonType.Secondary}
          handleClick={e => handleLinkClick(e, links.backend)}
        >
          {buttonsI18n.backend}
        </Button>
      </div>
    )
  }

  return (
    <article
      className={styles.projectItem}
      onClick={e => handleLinkClick(e, links.liveVersion)}
    >
      <ProjectHeader />
      <ProjectTechnologies />
      <ProjectLinks />
    </article>
  )
}

export default ProjectItem
