export enum SectionId {
  About = 'about',
  Projects = 'projects',
  Education = 'education',
  Experiments = 'experiments',
  Contact = 'contact',
}

export interface SitemapItem {
  id: SectionId
  label: string
}
