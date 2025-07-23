export enum SectionId {
  About = 'about',
  Projects = 'projects',
  Education = 'education',
  Experiments = 'experiments',
  Ideology = 'ideology',
  Contact = 'contact',
}

export interface SitemapItem {
  id: SectionId
  label: string
}
