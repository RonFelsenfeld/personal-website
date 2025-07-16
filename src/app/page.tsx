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
      <EducationSection />
      <ExperimentsSection />
    </MainLayout>
  )
}

export default IndexPage
