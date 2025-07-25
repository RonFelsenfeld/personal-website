import { AppHeader, AppFooter, MainLayout } from '@/components/layout'

import {
  AboutMeSection,
  ProjectsSection,
  ExperimentsSection,
  EducationSection,
  IdeologySection,
  ContactSection,
} from '@/components/sections'

import { Quote } from '@/components/common'

const IndexPage = () => {
  return (
    <MainLayout>
      <AppHeader />
      <AboutMeSection />
      <ProjectsSection />
      <Quote
        quote="The only way to do great work is to love what you do."
        author="Steve Jobs"
      />
      <EducationSection />
      <ExperimentsSection />
      <Quote
        quote="The only way to do great work is to love what you do."
        author="Steve Jobs"
      />
      <IdeologySection />
      <ContactSection />
      <AppFooter />
    </MainLayout>
  )
}

export default IndexPage
