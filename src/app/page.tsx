import { MainLayout } from '@/components/layouts'
import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  ContactSection,
} from '@/components/sections'

const IndexPage = () => {
  return (
    <MainLayout>
      <AboutMeSection />
      <ProjectsSection />
      <EducationSection />
      <ExperimentsSection />
      <ContactSection />
    </MainLayout>
  )
}

export default IndexPage
