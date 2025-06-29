import { MainLayout } from '@/components/layout'
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
