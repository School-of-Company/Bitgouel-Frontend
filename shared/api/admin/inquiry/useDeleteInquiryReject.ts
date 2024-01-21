import { useModal } from '@bitgouel/common'
import { ApiErrorTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { del, inquiryQueryKeys, inquiryUrl } from '../../common'

export const useDeleteInquiryReject = (id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>>(
    inquiryQueryKeys.deleteInquiry(id),
    () => del(inquiryUrl.inquiryDelete(id)),
    {
      onSuccess: () => {
        closeModal()
        push('/main/inquiry')
        toast.success('문의를 삭제했습니다')
      },
      onError: ({ response }) => {
        console.log(response?.data.message)
      },
    }
  )
}
