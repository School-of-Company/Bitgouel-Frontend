import { LectureCreatePayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { lectureUrl, lectureQueryKeys, post } from '../../../../common'

export const usePostCreateLecture = () =>
  useMutation<void, AxiosError, LectureCreatePayloadTypes>(
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
