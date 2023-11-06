import { useMutation } from '@tanstack/react-query'

import { post } from '../../libs'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { TokenResponseType } from '@/../types/src/tokenResponseType'
import TokenManager from '@/common/src/libs/api/TokenManager'
import { useRouter } from 'next/navigation'

const tokenManager = new TokenManager()
const router = useRouter()

export const usePostLogin = () =>
  useMutation<
    TokenResponseType,
    Error,
    { loginValues: { email: string; password: string } }
  >(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.auth(), loginValues),
    {
      onSuccess: (data) => {
        tokenManager.setTokens(data)
        return router.push('/main/home')
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
