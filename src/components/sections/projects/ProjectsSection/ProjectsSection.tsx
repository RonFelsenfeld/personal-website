import { Project } from '@/types/project.types'

import { mergeProjectsTextsAndMetadata } from '@/utils/projects.utils'

import { projectsMetadata } from '@/constants/projects'
import { i18n } from '@/constants/texts'

import { SectionLayout } from '@/components/layouts'
import { List } from '@/components/UI'

import ProjectItem from '../ProjectItem/ProjectItem'

import styles from './ProjectsSection.module.scss'

const { projectsSection } = i18n

const { title, description, projectsTexts } = projectsSection

const ProjectsSection = () => {
  const projects = mergeProjectsTextsAndMetadata(
    projectsTexts,
    projectsMetadata
  )

  const renderProject = (project: Project) => {
    return <ProjectItem project={project} />
  }

  return (
    <SectionLayout
      title={title}
      description={description}
      className={styles.projectsSection}
    >
      <List
        items={projects}
        renderItem={renderProject}
        className={styles.projectsList}
      />
    </SectionLayout>
  )
}

export default ProjectsSection
