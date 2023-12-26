import { useMutation } from '@tanstack/react-query'
import { post, postQueryKeys, postUrl } from '../../..'
import { AxiosError } from 'axios'
import { PostCreatePayloadTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useModal } from '@bitgouel/common/src/hooks'

export const usePostPost = (type: '게시' | '공지') => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, PostCreatePayloadTypes>(
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

