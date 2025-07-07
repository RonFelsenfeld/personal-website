import { MainLayout } from '@/components/layouts'
import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
} from '@/components/sections'

const IndexPage = () => {
  return (
    <MainLayout>
      <AboutMeSection />
      <ProjectsSection />
      <ExperimentsSection />
      <EducationSection />
    </MainLayout>
  )
}

export default IndexPage
