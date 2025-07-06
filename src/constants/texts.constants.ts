import { ProjectName } from '@/types/project.types'
import { ExperimentName } from '@/types/experiment.types'

const aboutMeSection = {
  name: 'Ron Felsenfeld',
  role: 'Full Stack Developer',
  company: 'Working at DevBoost',
  description:
    'AI enthusiast and graduate of Coding Academy - A Full Stack development bootcamp. Passionate about building modern web applications and exploring the latest technologies.',
}

const projectsSection = {
  title: 'Projects',
  description:
    'A collection of my most impactful projects that have shaped my development journey. Each one represents a unique challenge solved with modern technologies and thoughtful design. These works demonstrate my passion for creating meaningful software and commitment to delivering exceptional user experiences.',
  projectsTexts: {
    [ProjectName.SketchMate]: {
      title: 'SketchMate',
      description:
        'SketchMate is an intuitive and versatile drawing web application. Designed for both desktop and mobile devices, SketchMate allows users to create, manipulate, and manage shapes on a canvas with ease.',
    },
    [ProjectName.Xpenser]: {
      title: 'Xpenser',
      description:
        'Xpenser is a user-friendly tool designed to help individuals easily manage and track their expenses. With intuitive features and a clean interface, users can effortlessly record their transactions and categorize their expenses.',
    },
    [ProjectName.Anyday]: {
      title: 'Anyday',
      description:
        "Project management web application, inspired by monday.com. Anyday is our final project in Coding Academy's bootcamp, where I had the privilege of collaborating with the talented developers Ido Yotvat and Atar Mor.",
    },
  },
  buttons: {
    viewProject: 'View Project',
    frontend: 'Frontend',
    backend: 'Backend',
  },
}

const experimentsSection = {
  title: 'Experiments',
  description:
    'Hands-on explorations of new technologies, frameworks, and programming languages. These smaller but meaningful experiments help me stay current with emerging tools and expand my technical toolkit through practical coding experience.',
  experimentsTexts: {
    [ExperimentName.MisterToy]: {
      title: 'Mister Toy',
      description:
        'An online toy store web application built with TypeScript and React. Features toy browsing with filtering, user authentication, admin management, and bilingual support for English and Hebrew.',
    },
    [ExperimentName.MCPServer]: {
      title: 'MCP Playground',
      description:
        'An experimental microservices project demonstrating Model Context Provider (MCP) with stdio transport, featuring News and Weather services. Serves as a practical implementation and testing ground for MCP-based service communication.',
    },
    [ExperimentName.GoProxy]: {
      title: 'Go Proxy',
      description:
        'A lightweight HTTP/HTTPS proxy server written in Go that forwards requests while modifying request bodies. Features request/response transformation capabilities for debugging and testing scenarios.',
    },
  },
  repositoryLink: 'View Repository',
}

export const i18n = {
  aboutMeSection,
  projectsSection,
  experimentsSection,
} as const
