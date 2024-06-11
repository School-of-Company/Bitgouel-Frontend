'use client'

import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { IsModal } from '../atoms'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const isModal = useRecoilValue(IsModal)
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  )

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        {children}
        {isModal && <>{isModal}</>}
      </QueryClientProvider>
      <ToastContainer position='top-right' theme='light' autoClose={2000} />
    </ThemeProvider>
  )
}

export default GlobalLayout
