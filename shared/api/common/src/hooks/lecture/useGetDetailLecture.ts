import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../libs/queryKeys'
import { lectureUrl } from '../../libs/urlController'
import { get } from '../../libs'
import { AxiosResponse } from 'axios'
import { LectureItemType } from '../../types'
import { useSetRecoilState } from 'recoil'
import { LectureDetails } from '../../../../../common'

export const useGetDetailLecture = (
  id: string,
  options?: UseQueryOptions<AxiosResponse<LectureItemType[]>>
) => {
  const setLectureDetails = useSetRecoilState(LectureDetails)
  return useQuery<AxiosResponse<LectureItemType[]>>(
    lectureQueryKeys.getLectureDetail(id),
    () => get(lectureUrl.lectureDetail(id)),
    {
      onSuccess: ({ data }) => {},
    }
  )
}
