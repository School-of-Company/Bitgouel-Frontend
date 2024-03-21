import { ApiErrorTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { PwPage } from '@bitgouel/common'
import { emailQueryKeys, emailUrl, post } from '../../libs'
import { useSetRecoilState } from 'recoil'

export const usePostEmail = () => {
  const setPwPage = useSetRecoilState(PwPage)

  return useMutation<void, AxiosError<ApiErrorTypes>, { email: string }>(
    emailQueryKeys.postEmail(),
    (email) => post(emailUrl.email(), email),
    {
      onSuccess: () => {
        toast.success('인증번호를 발송했습니다')
        setPwPage(2)
      },
      onError: ({ response }) => {
        toast.error(response?.data.message.split('.')[0])
      },
    }
  )
}
