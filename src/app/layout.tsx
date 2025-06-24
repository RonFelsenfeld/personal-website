import '@/styles/main.scss'

export const metadata = {
  title: 'Ron Felsenfeld | Full Stack Developer',
  description: 'Portfolio website showcasing projects and experiments',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
