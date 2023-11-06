import type { AppProps } from 'next/app'
import { GlobalLayout } from '@common/layouts'
import '@common/styles/globals.css'
import '@/styles/font.css'
import { useRecoilValue } from 'recoil'
import { IsModal } from '@common/atoms'

export default function App({ Component, pageProps }: AppProps) {
  const isModal = useRecoilValue(IsModal)

  return (
    <GlobalLayout>
      <Component {...pageProps} />
      {isModal && <>{isModal}</>}
    </GlobalLayout>
  )
}
