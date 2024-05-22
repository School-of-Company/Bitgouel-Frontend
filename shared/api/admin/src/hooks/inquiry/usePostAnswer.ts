import { inquiryQueryKeys, inquiryUrl, post } from '@bitgouel/api'
import { useModal } from '@bitgouel/common'
import { ApiErrorTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePostAnswer = (id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>, { answer: string }>(
    inquiryQueryKeys.postAnswer(id),
    (answer) => post(inquiryUrl.inquiryAnswer(id), answer),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post/inquiry')
        toast.success('답변했습니다')
      },
      onError: ({ response }) => {
        console.log(response?.data.message)
      },
    }
  )
}
