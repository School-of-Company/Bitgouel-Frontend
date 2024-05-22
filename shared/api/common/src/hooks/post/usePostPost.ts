import { post, postQueryKeys, postUrl } from '@bitgouel/api'
import { useModal } from '@bitgouel/common'
import { ApiErrorTypes, PostCreatePayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePostPost = (type: '게시' | '공지') => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError<ApiErrorTypes>, PostCreatePayloadTypes>(
    postQueryKeys.postBoardCreate(),
    (createValues) => post(postUrl.postCreate(), createValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post')
        toast.success(
          `${type === '공지' ? '공지사항' : '게시글'}을 추가했습니다`
        )
      },
      onError: ({ response }) => {
        console.log(response)
      },
    }
  )
}
