'use client'

import { TokenManager, useGetMy } from '@bitgouel/api'
import { AuthorityContext } from '@bitgouel/common'

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  const tokenManager = new TokenManager()
  const { data } = useGetMy({
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!tokenManager.accessToken
  })

  return (
    <AuthorityContext.Provider value={data?.authority || 'ROLE_STUDENT'}>
      {children}
    </AuthorityContext.Provider>
  )
}

export default CustomProvider
