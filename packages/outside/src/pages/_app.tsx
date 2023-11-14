import type { AppProps } from 'next/app'
import { Header } from '@common/components'
import { GlobalLayout } from '@common/layouts'
import '@common/styles/globals.css'
import '@/styles/font.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalLayout>
        <Header inside={false} />
        <Component {...pageProps} />
      </GlobalLayout>
    </RecoilRoot>
  )
}
