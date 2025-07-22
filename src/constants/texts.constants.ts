import { ProjectName } from '@/types/project.types'
import { ExperimentName } from '@/types/experiment.types'
import { EducationItemName } from '@/types/education.types'
import { SectionId } from '@/types/sitemap.types'

import { COPYRIGHT_YEAR_PLACEHOLDER } from '@/utils/sitemap.utils'

const sitemap = {
  title: 'Site Map',
  links: {
    [SectionId.About]: 'About Me',
    [SectionId.Projects]: 'Projects',
    [SectionId.Education]: 'Education',
    [SectionId.Experiments]: 'Experiments',
    [SectionId.Contact]: 'Contact',
    [SectionId.Ideology]: 'Ideology',
  },
}

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

const educationSection = {
  title: 'Education',
  description:
    "I'm always looking to grow and learn new skills. These courses and certifications represent my ongoing journey to stay current with technology and expand my capabilities as a developer. There's something exciting about discovering new ways to solve problems and build better things.",
  educationTexts: {
    [EducationItemName.AIForDevelopers]: {
      title: 'AI For Developers',
      description:
        'An AI for developers training, covering generative AI, prompt engineering, LLMs, and Model Context Protocol (MCP). Included hands-on work with LangChain and agentic AI to build real-world, autonomous AI applications',
    },
    [EducationItemName.MySQL]: {
      title: 'MySQL',
      description:
        'An SQL course, covering essential and advanced SQL concepts, including relational database design, querying, data manipulation, and structured data management.',
    },
    [EducationItemName.TypeScript]: {
      title: 'TypeScript',
      description:
        'A comprehensive TypeScript course, covering type safety, advanced type features, object-oriented programming, and integration with modern JavaScript frameworks.',
    },
    [EducationItemName.FullStack]: {
      title: 'Full Stack',
      description:
        'An intensive Full Stack bootcamp focused on modern web development, covering core technologies and principles, best practices, and real-world application development.',
    },
    [EducationItemName.CleanCode]: {
      title: 'Clean Code',
      description:
        'A practical course on writing clean, efficient, and maintainable code, emphasizing readability, naming conventions, refactoring techniques, and industry best practices.',
    },
    [EducationItemName.HTMLCSS]: {
      title: 'HTML & CSS',
      description:
        'An advanced course covering modern HTML5 and CSS, focusing on semantic markup, responsive layouts, and best practices for writing clean, accessible, and maintainable HTML and CSS code.',
    },
  },
}

const contactSection = {
  title: 'Contact',
  description:
    "Have questions about one of my projects or interested in discussing technology and development? I enjoy connecting with fellow developers and exploring innovative ideas. Feel free to reach out - I'd be happy to connect and share insights.",
  form: {
    nameLabel: 'Full Name',
    emailLabel: 'Email',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    sendButton: 'Send',
    clearButton: 'Clear',
  },
}

const ideologySection = {
  title: 'Ideology',
  description:
    'My ideology is to be a full stack developer who is passionate about building modern web applications and exploring the latest technologies.',
}

const appFooter = {
  quote: {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas Edison',
  },
  backToTopButton: 'Back to Top',
  copyrights: `Copyright © Ron Felsenfeld ${COPYRIGHT_YEAR_PLACEHOLDER}. All rights reserved.`,
}

export const i18n = {
  sitemap,
  aboutMeSection,
  projectsSection,
  experimentsSection,
  educationSection,
  contactSection,
  ideologySection,
  appFooter,
} as const
