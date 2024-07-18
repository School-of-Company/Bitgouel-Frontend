import { del, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteEnrollment = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.deleteEnrollment(id),
    () => del(lectureUrl.lectureEnrollmentDelete(id)),
    options
  )
