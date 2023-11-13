import { UseQueryOptions, useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { post } from '../../libs'
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

export const usePostCreateLecture = (
  options?: UseQueryOptions<AxiosResponse<LectureCreateItemType[]>>
) => {
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
}
