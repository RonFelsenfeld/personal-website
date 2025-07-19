import { AppHeader, MainLayout } from '@/components/layouts'

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
      <AppHeader className="fullRow" />
      <AppContent />
    </MainLayout>
  )
}

export default IndexPage
