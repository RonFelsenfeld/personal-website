import { AppHeader, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  ContactSection,
} from '@/components/sections'

const IndexPage = () => {
  return (
    <MainLayout>
      <AppHeader />
      <AboutMeSection />
      <ProjectsSection />
      <EducationSection />
      <ExperimentsSection />
      <ContactSection />
    </MainLayout>
  )
}

export default IndexPage
