import React, { ReactNode } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import { useRecoilValue } from 'recoil'
import { IsModal } from '../atoms'

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  const isModal = useRecoilValue(IsModal)

  return (
    <ThemeProvider theme={theme}>
      {children}
      {isModal && <>{isModal}</>}
    </ThemeProvider>
  )
}

export default GlobalLayout
