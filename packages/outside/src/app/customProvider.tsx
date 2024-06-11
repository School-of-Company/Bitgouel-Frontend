'use client'

import { TokenManager, useGetMy } from '@bitgouel/api'
import { AuthorityContext } from '@bitgouel/common'
import React from 'react'

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  const tokenManager = new TokenManager()
  const { data } = useGetMy({
    enabled: !!tokenManager.accessToken
  })

  return (
      <AuthorityContext.Provider value={data?.authority}>
        {children}
      </AuthorityContext.Provider>
  )
}

export default CustomProvider
