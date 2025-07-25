import { i18n } from '@/constants/texts.constants'

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

const { quotes: quotesI18n } = i18n

const IndexPage = () => {
  return (
    <MainLayout>
      <AppHeader />
      <AboutMeSection />

      <Quote
        quote={quotesI18n.firstQuote.text}
        author={quotesI18n.firstQuote.author}
        className="fullRow"
      />

      <ProjectsSection />
      <EducationSection />
      <ExperimentsSection />

      <Quote
        quote={quotesI18n.secondQuote.text}
        author={quotesI18n.secondQuote.author}
        className="fullRow"
      />

      <IdeologySection />
      <ContactSection />
      <AppFooter />
    </MainLayout>
  )
}

export default IndexPage
