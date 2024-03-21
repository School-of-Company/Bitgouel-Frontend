import { patch, postQueryKeys, postUrl } from '@bitgouel/api'
import { useModal } from '@bitgouel/common'
import { PostModifyPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const usePatchPostModify = (id: string, type: '게시글' | '공지') => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, PostModifyPayloadTypes>(
    postQueryKeys.patchBoardModify(id),
    (modifyValues) => patch(postUrl.postModify(id), modifyValues),
    {
      onSuccess: () => {
        closeModal()
        if (type == '게시글') push('/main/post')
        else push('/main/post/notice')
        toast.success(`${type}을(를) 수정했습니다`)
      },
      onError: ({ response }) => {
        console.log(response)
      },
    }
  )
}

