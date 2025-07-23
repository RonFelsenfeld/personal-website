import {
  AimOutlined,
  BuildOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'

import {
  EducationItemData,
  EducationItemName,
  Experiment,
  ExperimentName,
  IdeologyItemData,
  InstitutionName,
  Project,
  ProjectName,
  SocialLink,
} from '@/types/portfolio.types'

import { generateRandomId } from '@/utils/general.utils'

import { i18n } from '@/constants/texts.constants'

const {
  projectsSection: projectsSectionI18n,
  experimentsSection: experimentsSectionI18n,
  educationSection: educationSectionI18n,
  ideologySection: ideologySectionI18n,
} = i18n

const getProjects = (): Record<ProjectName, Project> => {
  const projects: Record<ProjectName, Project> = {
    [ProjectName.SketchMate]: {
      id: 'sketchMate-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.SketchMate].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.SketchMate].description,
      technologies: ['ReactJS', 'HTML5 Canvas', 'SASS'],
      links: {
        liveVersion: 'https://sketchmate-mnu9.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/sketchmate-frontend',
        backend: 'https://github.com/RonFelsenfeld/sketchmate-backend',
      },
    },
    [ProjectName.Xpenser]: {
      id: 'xpenser-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.Xpenser].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.Xpenser].description,
      technologies: ['ReactJS', 'NodeJS', 'SASS', 'MongoDB'],
      links: {
        liveVersion: 'https://xpenser-mpg1.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/Xpenser-Frontend',
        backend: 'https://github.com/RonFelsenfeld/Xpenser-backend',
      },
    },
    [ProjectName.Anyday]: {
      id: 'anyday-project',
      title: projectsSectionI18n.projectsTexts[ProjectName.Anyday].title,
      description:
        projectsSectionI18n.projectsTexts[ProjectName.Anyday].description,
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ReduxJS', 'SASS'],
      links: {
        liveVersion: 'https://anyday-lodf.onrender.com/',
        frontend: 'https://github.com/RonFelsenfeld/anyday-frontend',
        backend: 'https://github.com/AtarMor/Anyday',
      },
    },
  }

  return projects
}

const getExperiments = (): Record<ExperimentName, Experiment> => {
  const experiments: Record<ExperimentName, Experiment> = {
    [ExperimentName.MisterToy]: {
      id: 'mister-toy-experiment',
      title:
        experimentsSectionI18n.experimentsTexts[ExperimentName.MisterToy].title,
      description:
        experimentsSectionI18n.experimentsTexts[ExperimentName.MisterToy]
          .description,
      technologies: [
        'TypeScript',
        'ReactJS',
        'Redux Toolkit',
        'SASS',
        'GraphQL',
        'MongoDB',
      ],
      repositoryLink: 'https://github.com/RonFelsenfeld/MisterToy-TS-Frontend',
    },
    [ExperimentName.MCPServer]: {
      id: 'mcp-server-experiment',
      title:
        experimentsSectionI18n.experimentsTexts[ExperimentName.MCPServer].title,
      description:
        experimentsSectionI18n.experimentsTexts[ExperimentName.MCPServer]
          .description,
      technologies: ['Python', 'MCP'],
      repositoryLink: 'https://github.com/RonFelsenfeld/mcp-playground',
    },
    [ExperimentName.GoProxy]: {
      id: 'go-proxy-experiment',
      title:
        experimentsSectionI18n.experimentsTexts[ExperimentName.GoProxy].title,
      description:
        experimentsSectionI18n.experimentsTexts[ExperimentName.GoProxy]
          .description,
      technologies: ['Go'],
      repositoryLink: 'https://github.com/RonFelsenfeld/go-proxy',
    },
  }

  return experiments
}

const getEducation = (): Record<EducationItemName, EducationItemData> => {
  const educationData: Record<EducationItemName, EducationItemData> = {
    [EducationItemName.AIForDevelopers]: {
      id: 'ai-for-developers-course',
      title:
        educationSectionI18n.educationTexts[EducationItemName.AIForDevelopers]
          .title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.AIForDevelopers]
          .description,
      institution: InstitutionName.YanivArad,
      skills: [
        'AI Agents',
        'MCP',
        'GenAI',
        'Prompt Engineering',
        'LLMs',
        'LangChain',
      ],
      completedAt: new Date('2025-07-01'),
      isFavorite: true,
    },
    [EducationItemName.MySQL]: {
      id: 'mysql-course',
      title: educationSectionI18n.educationTexts[EducationItemName.MySQL].title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.MySQL]
          .description,
      institution: InstitutionName.Udemy,
      skills: ['MySQL', 'Relational Database', 'Data Modeling', 'RDBMS'],
      completedAt: new Date('2025-03-01'),
      isFavorite: false,
    },
    [EducationItemName.TypeScript]: {
      id: 'typescript-course',
      title:
        educationSectionI18n.educationTexts[EducationItemName.TypeScript].title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.TypeScript]
          .description,
      institution: InstitutionName.Udemy,
      skills: ['TypeScript', 'OOP', 'Interfaces', 'Generics', 'Enums'],
      completedAt: new Date('2024-08-01'),
      isFavorite: false,
    },
    [EducationItemName.FullStack]: {
      id: 'full-stack-course',
      title:
        educationSectionI18n.educationTexts[EducationItemName.FullStack].title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.FullStack]
          .description,
      institution: InstitutionName.CodingAcademy,
      skills: [
        'Full Stack Development',
        'JavaScript',
        'ReactJS',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
      ],
      completedAt: new Date('2024-05-01'),
      isFavorite: true,
    },
    [EducationItemName.CleanCode]: {
      id: 'clean-code-course',
      title:
        educationSectionI18n.educationTexts[EducationItemName.CleanCode].title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.CleanCode]
          .description,
      institution: InstitutionName.Udemy,
      skills: [
        'Clean Code',
        'Refactoring',
        'SOLID Principles',
        'Design Patterns',
        'Code Quality',
      ],
      completedAt: new Date('2023-08-01'),
      isFavorite: false,
    },
    [EducationItemName.HTMLCSS]: {
      id: 'html-css-course',
      title:
        educationSectionI18n.educationTexts[EducationItemName.HTMLCSS].title,
      description:
        educationSectionI18n.educationTexts[EducationItemName.HTMLCSS]
          .description,
      institution: InstitutionName.Udemy,
      skills: [
        'HTML',
        'CSS',
        'Responsive Design',
        'Semantic Markup',
        'UI/UX Principles',
      ],
      completedAt: new Date('2023-03-01'),
      isFavorite: false,
    },
  }

  return educationData
}

const getSocialLinks = (): SocialLink[] => {
  const socialLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/ronfelsenfeld',
      Icon: GithubOutlined,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ron-felsenfeld/',
      Icon: LinkedinOutlined,
    },
  ]

  return socialLinks
}

const getIdeologyItems = (): IdeologyItemData[] => {
  const { items } = ideologySectionI18n
  const { collaboration, professionalism, curiosity, craftsmanship } = items

  return [
    {
      id: 'collaboration',
      title: collaboration.title,
      phrase: collaboration.phrase,
      description: collaboration.description,
      traits: collaboration.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: UsergroupAddOutlined,
    },
    {
      id: 'professionalism',
      title: professionalism.title,
      phrase: professionalism.phrase,
      description: professionalism.description,
      traits: professionalism.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: AimOutlined,
    },
    {
      id: 'curiosity',
      title: curiosity.title,
      phrase: curiosity.phrase,
      description: curiosity.description,
      traits: curiosity.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: SearchOutlined,
    },
    {
      id: 'craftsmanship',
      title: craftsmanship.title,
      phrase: craftsmanship.phrase,
      description: craftsmanship.description,
      traits: craftsmanship.traits.map(trait => ({
        id: generateRandomId(),
        title: trait,
      })),
      Icon: BuildOutlined,
    },
  ]
}

export const portfolioService = {
  getProjects,
  getExperiments,
  getEducation,
  getSocialLinks,
  getIdeologyItems,
}
