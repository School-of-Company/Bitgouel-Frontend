import type { Metadata } from 'next'
import { GlobalLayout } from '@bitgouel/common/src/layouts'
import '@bitgouel/common/src/styles/globals.css'
import { Header } from '@bitgouel/common/src/components'
import RecoilRootProvider from './recoilRootProvider'

export const metadata: Metadata = {
  title: '빛고을직업교육혁신지구',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <RecoilRootProvider>
          <GlobalLayout>
            <Header is_admin={true} />
            {children}
            <div id='modal' />
          </GlobalLayout>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
