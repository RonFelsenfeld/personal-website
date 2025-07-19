import { AppHeader, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
} from '@/components/sections'

const IndexPage = () => {
  const AppContent = () => {
    return (
      <>
        <AboutMeSection />
        <ProjectsSection />
        <EducationSection />
        <ExperimentsSection />
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
