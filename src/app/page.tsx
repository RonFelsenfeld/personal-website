import { AppHeader, AppFooter, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  IdeologySection,
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
      <IdeologySection />
      <ContactSection />
      <AppFooter />
    </MainLayout>
  )
}

export default IndexPage
