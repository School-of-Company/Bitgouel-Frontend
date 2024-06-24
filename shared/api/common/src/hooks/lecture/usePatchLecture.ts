import { lectureQueryKeys, lectureUrl, patch } from '@bitgouel/api'
import { LectureWritePayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchLecture = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, LectureWritePayloadTypes>
) =>
  useMutation<void, AxiosError, LectureWritePayloadTypes>(
    lectureQueryKeys.patchLecture(id),
    (modifyValues) => patch(lectureUrl.lecturePatch(id), modifyValues),
    options
  )
