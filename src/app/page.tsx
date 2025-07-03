import { MainLayout } from '@/components/layouts'
import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
} from '@/components/sections'

const IndexPage = () => {
  return (
    <MainLayout>
      <AboutMeSection />
      <ProjectsSection />
      <ExperimentsSection />
    </MainLayout>
  )
}

export default IndexPage
