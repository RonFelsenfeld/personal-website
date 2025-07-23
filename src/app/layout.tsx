import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import '@/styles/main.scss'

export const metadata = {
  title: 'Ron Felsenfeld | Full Stack Developer',
  description: 'Portfolio website showcasing projects and experiments',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}

export default RootLayout
