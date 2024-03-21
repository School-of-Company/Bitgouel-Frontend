import { inquiryQueryKeys, inquiryUrl, post } from '@bitgouel/api'
import { useModal } from '@bitgouel/common'
import { ApiErrorTypes, InquiryPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePostInquiry = () => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>, InquiryPayloadTypes>(
    inquiryQueryKeys.postInquiry(),
    (inquiryValues) => post(inquiryUrl.inquiryCreate(), inquiryValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post/inquiry')
        toast.success('문의했습니다')
      },
      onError: ({ response }) => {
        console.log(response?.data.message)
      },
    }
  )
}
