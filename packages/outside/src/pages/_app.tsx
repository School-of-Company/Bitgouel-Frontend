import type { AppProps } from 'next/app'
import { GlobalLayout } from '@common/layouts'
import { useRecoilValue } from 'recoil'
import { IsModal } from '@common/atoms'
import '@/styles/font.css'

export default function App({ Component, pageProps }: AppProps) {
  const isModal = useRecoilValue(IsModal)
  return (
    <GlobalLayout>
      <Component {...pageProps} />
      {isModal && <>{isModal}</>}
    </GlobalLayout>
  )
}
