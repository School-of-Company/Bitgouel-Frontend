import { useMutation } from '@tanstack/react-query'
import { patch, postQueryKeys, postUrl } from '../../..'
import { AxiosError } from 'axios'
import { PostModifyPayloadTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common/src/hooks'
import { toast } from 'react-toastify'

export const usePatchPostModify = (id: string) => {
  const { push } = useRouter()
  const { closeModal } = useModal()

  return useMutation<void, AxiosError, PostModifyPayloadTypes>(
    postQueryKeys.patchBoardModify(id),
    (modifyValues) => patch(postUrl.postModify(id), modifyValues),
    {
      onSuccess: () => {
        closeModal()
        push('/main/post')
        toast.success('게시글을 수정했습니다')
      },
      onError: ({ response }) => {
        console.log(response)
      },
    }
  )
}
