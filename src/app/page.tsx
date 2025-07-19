import { AppHeader, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  ContactSection,
} from '@/components/sections'

const IndexPage = () => {
  const AppContent = () => {
    return (
      <>
        <AboutMeSection />
        <ProjectsSection />
        <EducationSection />
        <ExperimentsSection />
        <ContactSection />
      </>
    )
  }

  return (
    <MainLayout>
      <AppHeader />
      <AppContent />
    </MainLayout>
  )
}

export default IndexPage
