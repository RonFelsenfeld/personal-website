import { Project } from '@/types/project.types'

import { portfolio } from '@/constants/portfolio.constants'
import { i18n } from '@/constants/texts'

import { SectionLayout } from '@/components/layouts'
import { List } from '@/components/UI'

import ProjectItem from '../ProjectItem/ProjectItem'

import styles from './ProjectsSection.module.scss'

const { projectsSection: projectsSectionI18n } = i18n

const { projectsData } = portfolio

const ProjectsSection = () => {
  const renderProject = (project: Project) => {
    return <ProjectItem project={project} />
  }

  const projects = Object.values(projectsData)

  return (
    <SectionLayout
      title={projectsSectionI18n.title}
      description={projectsSectionI18n.description}
      className={styles.projectsSection}
    >
      <List<Project>
        items={projects}
        renderItem={renderProject}
        className={styles.projectsList}
      />
    </SectionLayout>
  )
}

export default ProjectsSection
