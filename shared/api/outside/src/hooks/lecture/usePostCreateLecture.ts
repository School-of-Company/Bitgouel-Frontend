import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { lectureQueryKeys, lectureUrl, post } from '../../../../common'

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
  useMutation<AxiosResponse, AxiosError, LectureCreateItemType>(
    lectureQueryKeys.postLetureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
