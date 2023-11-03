import type { AppProps } from 'next/app'
import { GlobalLayout } from '@common/layouts'
import '@common/styles/globals.css'
import '@/styles/font.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}
