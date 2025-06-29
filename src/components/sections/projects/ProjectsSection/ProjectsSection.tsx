import { mergeProjectsTextsAndMetadata } from '@/utils/projects.utils'

import { projectsMetadata } from '@/constants/projects'
import { i18n } from '@/constants/texts'

import { Subheading } from '@/components/UI'
import ProjectList from '../ProjectList/ProjectList'

import styles from './ProjectsSection.module.scss'

const { projectsSection } = i18n

const { title, projectsTexts } = projectsSection

const ProjectsSection = () => {
  const projects = mergeProjectsTextsAndMetadata(
    projectsTexts,
    projectsMetadata
  )

  return (
    <section className={styles.projectsSection}>
      <Subheading>{title}</Subheading>
      <ProjectList projects={projects} />
    </section>
  )
}

export default ProjectsSection
