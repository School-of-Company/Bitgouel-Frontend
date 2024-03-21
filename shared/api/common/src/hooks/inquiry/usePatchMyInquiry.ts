import { inquiryQueryKeys, inquiryUrl, patch } from '@bitgouel/api'
import { useModal } from '@bitgouel/common'
import { ApiErrorTypes, InquiryPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePatchMyInquiry = (id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>, InquiryPayloadTypes>(
    inquiryQueryKeys.patchInquiry(id),
    (modifyValues) => patch(inquiryUrl.myInquiryModify(id), modifyValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post/inquiry')
        toast.success('문의를 수정했습니다')
      },
      onError: ({ response }) => {
        console.log(response?.data.message)
      },
    }
  )
}
