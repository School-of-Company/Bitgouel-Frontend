import { myQueryKeys, patch, userUrl } from '@bitgouel/api'
import { PwPage } from '@bitgouel/common'
import { ApiErrorTypes, ChangePwPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'

export const usePatchPassword = () => {
  const setPwPage = useSetRecoilState(PwPage)

  return useMutation<void, AxiosError<ApiErrorTypes>, ChangePwPayloadTypes>(
    myQueryKeys.patchPw(),
    (newPassword) => patch(userUrl.user(), newPassword),
    {
      onSuccess: () => {
        toast.success('비밀번호가 변경 되었습니다')
        setPwPage(4)
      },
    }
  )
}
