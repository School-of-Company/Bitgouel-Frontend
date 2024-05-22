import { lectureQueryKeys, lectureUrl, patch } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchApplyComplete = (
  id: string,
  studentId: string,
  isComplete: boolean,
  options?: UseMutationOptions
) =>
  useMutation<void, AxiosError>(
    lectureQueryKeys.patchLectureApplyComplete(id, studentId),
    () => patch(lectureUrl.lectureModifyComplete(id, studentId, isComplete)),
    options
  )
