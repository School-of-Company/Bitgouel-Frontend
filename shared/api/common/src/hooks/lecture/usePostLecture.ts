import { lectureQueryKeys, lectureUrl, post } from '@bitgouel/api'
import { LectureWritePayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostLecture = (
  options?: UseMutationOptions<void, AxiosError, LectureWritePayloadTypes>
) =>
  useMutation<void, AxiosError, LectureWritePayloadTypes>(
    lectureQueryKeys.postLectureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    options
  )
