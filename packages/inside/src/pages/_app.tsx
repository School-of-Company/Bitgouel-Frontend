import type { AppProps } from 'next/app'
import { GlobalLayout } from '@common/layouts'
import { Header } from '@common/components'
import '@common/styles/globals.css'
import '@/styles/font.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalLayout>
        <Header inside={true} />
        <Component {...pageProps} />
      </GlobalLayout>
    </RecoilRoot>
  )
}
