import { lectureQueryKeys, lectureUrl, post } from '@bitgouel/api'
import { ApiErrorTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostEnrollment = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.postLectureApplication(id),
    () => post(lectureUrl.lectureEnrollment(id)),
    options
  )
