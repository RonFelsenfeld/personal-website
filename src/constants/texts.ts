import { ProjectName } from '@/types/project.types'

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
}

export const i18n = {
  aboutMeSection,
  projectsSection,
  experimentsSection,
}
