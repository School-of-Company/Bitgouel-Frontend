import { lectureQueryKeys, lectureUrl, post } from '@bitgouel/api'
import { LectureCreatePayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostLecture = (
  options?: UseMutationOptions<void, AxiosError, LectureCreatePayloadTypes>
) =>
  useMutation<void, AxiosError, LectureCreatePayloadTypes>(
    lectureQueryKeys.postLectureCreate(),
    (createValues) => post(lectureUrl.lecture(), createValues),
    options
  )
