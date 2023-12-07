import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { authUrl, del, authQueryKeys, TokenManager } from '../../libs'

export const useDeleteLogout = () => {
  const tokenManager = new TokenManager()
  const { push } = useRouter()

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
        push('/auth/login')
        toast.success('로그아웃 했습니다')
      },
    }
  )
}
