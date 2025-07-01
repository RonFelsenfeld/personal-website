import { MainLayout } from '@/components/layouts'
import { AboutMeSection, ProjectsSection } from '@/components/sections'

const IndexPage = () => {
  return (
    <MainLayout>
      <AboutMeSection />
      <ProjectsSection />
    </MainLayout>
  )
}

export default IndexPage
