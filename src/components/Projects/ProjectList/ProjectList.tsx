import { Project } from '@/types/project.types'
import { ProjectItem } from '..'

interface ProjectListProps {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.metadata.id}>
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
