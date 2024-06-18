import { GlobalLayout, Header, CustomProvider } from '@bitgouel/common'
import '@bitgouel/common/src/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import RecoilRootProvider from './recoilRootProvider'

export const metadata: Metadata = {
  title: '빛고을직업교육혁신지구',
  icons: {
    icon: '/favicon.ico',
  },
  description: '빛고을직업교육혁신지구의 관리자 페이지입니다.',
  openGraph: {
    type: 'website',
    url: 'https://빛고을직업교육혁신지구.com/',
    title: '빛고을직업교육혁신지구',
    description: '빛고을직업교육혁신지구의 관리자 페이지입니다.',
    siteName: '빛고을직업교육혁신지구',
    images: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8id9APyQsslHrq-tqJR5hl-8mwUPvi4XHRA&s',
    },
  },
  verification: {
    google: '빛고을직업교육혁신지구',
    other: {
      'naver-site-verification': '빛고을직업교육혁신지구',
    },
  },
  twitter: {
    title: '빛고을직업교육혁신지구',
    description: '빛고을직업교육혁신지구의 관리자 페이지입니다.',
    images: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8id9APyQsslHrq-tqJR5hl-8mwUPvi4XHRA&s',
    },
  },
}

const pretendard = localFont({
  src: [
    {
      path: './fonts/woff/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/woff/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/woff/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={pretendard.className}>
      <body>
        <picture>
          <RecoilRootProvider>
            <GlobalLayout>
              <CustomProvider>
                <Header isAdmin={true} />
                {children}
                <div id='modal' />
              </CustomProvider>
            </GlobalLayout>
          </RecoilRootProvider>
        </picture>
      </body>
    </html>
  )
}
