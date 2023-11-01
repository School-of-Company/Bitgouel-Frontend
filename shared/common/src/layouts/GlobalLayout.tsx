import React, { ReactNode } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import { RecoilRoot } from 'recoil'

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  )
}

export default GlobalLayout
