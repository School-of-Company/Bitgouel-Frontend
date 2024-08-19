import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApplyListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLectureApplyList = (
  id: string,
  isComplete: boolean,
  options?: UseQueryOptions<ApplyListResponseTypes>
) =>
  useQuery<ApplyListResponseTypes, AxiosError>(
    lectureQueryKeys.getLectureApplyList(id, isComplete),
    () => get(lectureUrl.lectureApplyList(id, isComplete)),
    options
  )
