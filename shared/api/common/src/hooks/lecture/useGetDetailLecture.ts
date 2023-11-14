import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import { LectureItemType } from '../../types'
import { useSetRecoilState } from 'recoil'

export const useGetDetailLecture = (
  id: string | undefined,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    options
  )
