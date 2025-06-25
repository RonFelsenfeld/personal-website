import { projectService } from '@/types/services/project.service'

import { mergeProjectsTextsAndMetadata } from '@/utils/projects.utils'

import { i18n } from '@/constants/texts'

import styles from './ProjectsSection.module.scss'

const { projectsSection: projectsSectionI18n } = i18n

const ProjectsSection = () => {
  const projectsMetadata = projectService.getProjectsMetadata()

  const projects = mergeProjectsTextsAndMetadata(
    projectsSectionI18n,
    projectsMetadata
  )

  return (
    <section className="ProjectsSection">Hello from ProjectsSection</section>
  )
}

export default ProjectsSection
