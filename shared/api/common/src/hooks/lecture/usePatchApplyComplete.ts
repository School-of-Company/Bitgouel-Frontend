import { lectureQueryKeys, lectureUrl, patch } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchApplyComplete = (
  id: string,
  studentIds: string[],
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.patchApplyComplete(id, studentIds),
    () => patch(lectureUrl.lectureApplyComplete(id, studentIds)),
    options
  )
