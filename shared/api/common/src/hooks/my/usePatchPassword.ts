import { useMutation } from '@tanstack/react-query'
import { myQueryKeys, patch, userUrl } from '../../libs'
import { AxiosError } from 'axios'
import { ApiErrorTypes, ChangePwPayloadTypes } from '@bitgouel/types'
import { useModal } from '@bitgouel/common'
import { toast } from 'react-toastify'

export const usePatchPassword = () => {
  const { closeModal } = useModal()
  return useMutation<void, AxiosError<ApiErrorTypes>, ChangePwPayloadTypes>(
    myQueryKeys.patchPw(),
    (newPassword) => patch(userUrl.user(), newPassword),
    {
      onSuccess: () => {
        closeModal()
        toast.success('비밀번호를 변경했습니다')
      },
    }
  )
}
