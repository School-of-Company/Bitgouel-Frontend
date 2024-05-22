import { TokenManager, authQueryKeys, authUrl, del } from '@bitgouel/api'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useDeleteWithDraw = () => {
  const tokenManager = new TokenManager()
  const router = useRouter()

  return useMutation(
    authQueryKeys.deleteWithDraw(),
    () => del(authUrl.withdraw()),
    {
      onSuccess: () => {
        tokenManager.removeTokens()
        toast.success('계정을 탈퇴했습니다')
      },
    }
  )
}
