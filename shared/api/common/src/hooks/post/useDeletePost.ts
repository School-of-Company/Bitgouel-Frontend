import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { del, postQueryKeys, postUrl } from '../../libs'
import { useModal } from '@bitgouel/common/src/hooks'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useDeletePost = (id: string, type: '공지사항' | '게시글') => {
  const { push } = useRouter()
  const { closeModal } = useModal()
  return useMutation<void, AxiosError>(
    postQueryKeys.deleteBoardDelete(id),
    () => del(postUrl.postDetail(id)),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post')
        toast.success(`${type}을 삭제했습니다`)
      },
      onError: ({ response }) => {
        console.log(response)
      },
    }
  )
}

