import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { post } from '../../libs'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '../../../../../common/src/hooks'

export const usePostApplicationLecture = (id: string) => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse>(
    lectureQueryKeys.postLectureApplication(id),
    () => post(lectureUrl.lectureApplication(id)),
    {
      onSuccess: (data) => {
        closeModal()
        router.push('/main/lecture')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
