'use client'

import { Project } from '@/types/project.types'

import { i18n } from '@/constants/texts'

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
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </header>
    )
  }

  const ProjectTechnologies = () => {
    return (
      <ul className={styles.technologies}>
        {technologies.map(tech => (
          <li
            key={tech}
            className={styles.techTag}
          >
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    )
  }

  const ProjectLinks = () => {
    return (
      <div className={styles.links}>
        <button
          className={styles.linkButtonPrimary}
          onClick={e => handleLinkClick(e, links.liveVersion)}
        >
          {buttonsI18n.viewProject}
        </button>

        <button
          className={styles.linkButton}
          onClick={e => handleLinkClick(e, links.frontend)}
        >
          {buttonsI18n.frontend}
        </button>

        <button
          className={styles.linkButton}
          onClick={e => handleLinkClick(e, links.backend)}
        >
          {buttonsI18n.backend}
        </button>
      </div>
    )
  }

  return (
    <article
      className={styles.projectCard}
      onClick={e => handleLinkClick(e, links.liveVersion)}
    >
      <ProjectHeader />
      <ProjectTechnologies />
      <ProjectLinks />
    </article>
  )
}

export default ProjectItem
