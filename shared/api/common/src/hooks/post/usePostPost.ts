import { useMutation } from '@tanstack/react-query'
import { post, postQueryKeys, postUrl } from '../../..'
import { AxiosError } from 'axios'
import { PostCreatePayloadTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePostPost = (type: '게시' | '공지') => {
  const { push } = useRouter()

  return useMutation<void, AxiosError, PostCreatePayloadTypes>(
    postQueryKeys.postBoardCreate(),
    (createValues) => post(postUrl.postCreate(), createValues),
    {
      onSuccess: () => {
        push('/main/post')
        toast.success(`${type}글을 추가했습니다`)
      },
      onError: ({ response }) => {
        console.log(response)
      },
    }
  )
}
