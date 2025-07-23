import {
  ProjectName,
  ExperimentName,
  EducationItemName,
} from '@/types/portfolio.types'
import { SectionId } from '@/types/sitemap.types'

import { COPYRIGHT_YEAR_PLACEHOLDER } from '@/utils/sitemap.utils'

const sitemap = {
  title: 'Site Map',
  links: {
    [SectionId.About]: 'About Me',
    [SectionId.Projects]: 'Projects',
    [SectionId.Education]: 'Education',
    [SectionId.Experiments]: 'Experiments',
    [SectionId.Ideology]: 'Ideology',
    [SectionId.Contact]: 'Contact',
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

const ideologySection = {
  title: 'Ideology',
  description:
    "Being a developer is about more than code—it's about curiosity, empathy, and making a positive impact. I’m guided by integrity, creativity, and a genuine desire to help others. My goal is to build technology that not only works well, but also makes life better for people.",

  items: {
    collaboration: {
      title: 'Collaboration',
      phrase: 'Tech is a team sport.',
      description:
        'I thrive in collaborative environments where ideas flow freely and every voice matters. I listen actively, communicate with clarity, and enjoy pair programming, code reviews, and product discussions.',
      traits: [
        "Writing code that's easy for others to understand",
        'Being open to feedback and eager to give it',
        'Helping teammates, even outside my direct responsibilities',
      ],
    },
    professionalism: {
      title: 'Professionalism',
      phrase: "Do it right, or don't ship it.",
      description:
        "I approach every project — big or small — with a mindset of care and responsibility. From Git hygiene and commit messages to consistent naming and project structure, I'm intentional about how I build.",
      traits: [
        'Prioritizing maintainability, scalability, and clarity',
        'Respecting deadlines and communicating blockers early',
        'Following conventions while knowing when to challenge them',
      ],
    },
    curiosity: {
      title: 'Curiosity',
      phrase: 'Learning is a mindset, not a phase.',
      description:
        "I'm naturally driven to explore. Whether it's reading docs, debugging an unfamiliar stack, or learning a new language — I ask questions, test ideas, and constantly expand my understanding.",
      traits: [
        'Breaking things down to understand how they really work',
        'Learning new tools and techniques on my own initiative',
        'Embracing challenges as opportunities for growth',
      ],
    },
    craftsmanship: {
      title: 'Craftsmanship',
      phrase: 'Code should feel as good as it works.',
      description:
        "I see code as more than instructions — it's a form of expression. I strive for clarity, elegance, and intent in everything I write. A great user experience starts with thoughtful development.",
      traits: [
        'Writing clean, modular, and self-documenting code',
        'Caring about performance, UX, and polish',
        'Refining until it feels right — not just "done"',
      ],
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
  ideologySection,
  contactSection,
  appFooter,
} as const
