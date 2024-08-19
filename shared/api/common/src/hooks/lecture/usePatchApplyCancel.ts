import { lectureQueryKeys, lectureUrl, patch } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchApplyCancel = (
  id: string,
  studentIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.deleteApplyCancel(id, studentIds),
    () => patch(lectureUrl.lectureApplyCancel(id, studentIds)),
    options
  )
