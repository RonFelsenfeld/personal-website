import { mergeProjectsTextsAndMetadata } from '@/utils/projects.utils'

import { projectsMetadata } from '@/constants/projects'
import { i18n } from '@/constants/texts'

import { SectionLayout } from '@/components/layouts'

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
    <SectionLayout
      title={title}
      className={styles.projectsSection}
    >
      <ProjectList projects={projects} />
    </SectionLayout>
  )
}

export default ProjectsSection
