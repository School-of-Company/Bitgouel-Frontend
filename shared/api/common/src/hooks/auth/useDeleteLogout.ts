import { TokenManager, authQueryKeys, authUrl, del } from '@bitgouel/api'
import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { match } from 'ts-pattern'

export const useDeleteLogout = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()
  const pathname = usePathname()

  return useMutation(
    authQueryKeys.deleteLogout(),
    () =>
      del(authUrl.auth(), {
        headers: {
          RefreshToken: `Bearer ${tokenManager.refreshToken}`,
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        tokenManager.removeTokens()
        match(pathname)
          .with('/auth/find', () => toast.info('다시 로그인 해주세요'))
          .otherwise(() => toast.success('로그아웃 했습니다'))
      },
    }
  )
}
