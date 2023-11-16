import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../../../common'
import { lectureUrl } from '../../../../common'
import { post } from '../../../../common'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '../../../../../common/src/hooks'

interface LectureCreateItemType {
  name: string
  content: string
  startDate: string
  endDate: string
  completeDate: string
  lectureType: string
  credit: number
  maxRegisteredUser: number
}

export const usePostCreateLecture = () => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, AxiosError, LectureCreateItemType>(
    lectureQueryKeys.postLetureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
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
