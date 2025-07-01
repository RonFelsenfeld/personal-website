import {
  Project,
  ProjectMetadata,
  ProjectName,
  ProjectsTexts,
} from '@/types/project.types'

export const mergeProjectsTextsAndMetadata = (
  projectsTexts: ProjectsTexts,
  projectsMetadata: Record<ProjectName, ProjectMetadata>
): Project[] => {
  const projectNames = Object.values(ProjectName)

  const fullProjects = projectNames.map(projectName => {
    const projectTexts = projectsTexts[projectName]
    const projectMetadata = projectsMetadata[projectName]

    return { ...projectTexts, metadata: projectMetadata }
  })

  return fullProjects
}
