import { Project } from '@/types/project.types'

import ProjectItem from '../ProjectItem/ProjectItem'

import styles from './ProjectList.module.scss'

interface ProjectListProps {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className={styles.projectList}>
      {projects.map(project => (
        <li
          key={project.metadata.id}
          className={styles.projectItem}
        >
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
