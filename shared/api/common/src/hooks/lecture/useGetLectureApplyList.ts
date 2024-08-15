import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApplyListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLectureApplyList = (
  id: string,
  is_complete: boolean,
  options?: UseQueryOptions<ApplyListResponseTypes>
) =>
  useQuery<ApplyListResponseTypes, AxiosError>(
    lectureQueryKeys.getLectureApplyList(id, is_complete),
    () => get(lectureUrl.lectureApplyList(id, is_complete)),
    options
  )
