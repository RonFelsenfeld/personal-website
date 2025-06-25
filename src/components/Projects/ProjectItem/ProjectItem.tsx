import { Project } from '@/types/project.types'

interface ProjectItemProps {
  project: Project
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return <article>{project.title}</article>
}

export default ProjectItem
