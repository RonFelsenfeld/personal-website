'use client'

import { Project } from '@/types/project.types'

import styles from './ProjectItem.module.scss'

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { title, description, metadata } = project
  const { technologies, links } = metadata

  const handleCardClick = () => {
    window.open(links.liveVersion, '_blank', 'noopener,noreferrer')
  }

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      className={styles.projectCard}
      onClick={handleCardClick}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.technologies}>
        {technologies.map(tech => (
          <span
            key={tech}
            className={styles.techTag}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <button
          className={styles.linkButtonPrimary}
          onClick={e => handleLinkClick(e, links.liveVersion)}
        >
          <svg
            className={styles.linkIcon}
            viewBox="0 0 24 24"
          >
            <path d="M10 6v2h5.59L8.79 14.79l1.41 1.41L17 9.41V15h2V6h-9z" />
          </svg>
          View Project
        </button>

        {links.frontend && (
          <button
            className={styles.linkButton}
            onClick={e => handleLinkClick(e, links.frontend!)}
          >
            <svg
              className={styles.linkIcon}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Frontend
          </button>
        )}

        <button
          className={styles.linkButton}
          onClick={e => handleLinkClick(e, links.backend!)}
        >
          <svg
            className={styles.linkIcon}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Backend
        </button>
      </div>
    </article>
  )
}

export default ProjectItem
