import { AppHeader, AppFooter, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  ContactSection,
  IdeologySection,
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
      <IdeologySection />
      <AppFooter />
    </MainLayout>
  )
}

export default IndexPage
