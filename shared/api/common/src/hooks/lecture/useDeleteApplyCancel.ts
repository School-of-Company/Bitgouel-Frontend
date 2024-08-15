import { del, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteApplyCancel = (
  id: string,
  studentIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.deleteApplyCancel(id, studentIds),
    () => del(lectureUrl.lectureApplyCancel(id, studentIds)),
    options
  )
