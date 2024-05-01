import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApplyListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLectureApplyList = (
  id: string,
  options?: UseQueryOptions<ApplyListResponseTypes>
) =>
  useQuery<ApplyListResponseTypes, AxiosError>(
    lectureQueryKeys.getLectureApplyList(id),
    () => get(lectureUrl.lectureApplyList(id)),
    options
  )
