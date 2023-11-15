'use client'

import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import { useRecoilValue } from 'recoil'
import { IsModal } from '../atoms'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
    </ThemeProvider>
  )
}

export default GlobalLayout
