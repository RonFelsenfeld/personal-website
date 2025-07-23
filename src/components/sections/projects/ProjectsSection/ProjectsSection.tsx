import { portfolioService } from '@/services/portfolio.service'

import { Project } from '@/types/portfolio.types'
import { SectionId } from '@/types/sitemap.types'

import { i18n } from '@/constants/texts.constants'

import { SectionLayout } from '@/components/layout'
import { List } from '@/components/UI'

import ProjectItem from '../ProjectItem/ProjectItem'

import styles from './ProjectsSection.module.scss'

const { projectsSection: projectsSectionI18n } = i18n

const ProjectsSection = () => {
  const projectsData = portfolioService.getProjects()

  const renderProject = (project: Project) => {
    return <ProjectItem project={project} />
  }

  return (
    <SectionLayout
      id={SectionId.Projects}
      title={projectsSectionI18n.title}
      description={projectsSectionI18n.description}
      className={styles.projectsSection}
    >
      <List<Project>
        items={Object.values(projectsData)}
        renderItem={renderProject}
        className={styles.projectsList}
      />
    </SectionLayout>
  )
}

export default ProjectsSection
