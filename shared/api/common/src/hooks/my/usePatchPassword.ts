import { myQueryKeys, patch, userUrl } from '@bitgouel/api'
import { PwPage, useModal } from '@bitgouel/common'
import { ApiErrorTypes, ChangePwPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { match } from 'ts-pattern'

export const usePatchPassword = () => {
  const setPwPage = useSetRecoilState(PwPage)
  const pathname = usePathname()
  const { closeModal } = useModal()
  const { push } = useRouter()

  return useMutation<void, AxiosError<ApiErrorTypes>, ChangePwPayloadTypes>(
    myQueryKeys.patchPw(),
    (newPassword) => patch(userUrl.user(), newPassword),
    {
      onSuccess: () => {
        match(pathname)
          .with('/main/my', () => {
            toast.success('비밀번호가 변경 되었습니다, 다시 로그인 해주세요.')
            closeModal()
            push('/auth/login')
          })
          .otherwise(() => {
            toast.success('비밀번호가 변경 되었습니다')
            setPwPage(4)
          })
      },
    }
  )
}
