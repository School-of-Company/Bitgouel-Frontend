import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { authUrl, del, authQueryKeys, TokenManager } from '../../libs'
import { match } from 'ts-pattern'

export const useDeleteLogout = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)

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
        router.push('/auth/login')
        match(pathname)
          .with('/auth/find', () => toast.info('다시 로그인 해주세요'))
          .otherwise(() => toast.success('로그아웃 했습니다'))
      },
    }
  )
}
