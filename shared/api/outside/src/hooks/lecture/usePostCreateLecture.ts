import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../../../common'
import { lectureUrl } from '../../../../common'
import { post } from '../../../../common'
import { AxiosResponse } from 'axios'

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

export const usePostCreateLecture = () =>
  useMutation<AxiosResponse<LectureCreateItemType[]>>(
    lectureQueryKeys.postLetureCreate(),
    (newCreate) => post(lectureUrl.lecture(), newCreate),
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
