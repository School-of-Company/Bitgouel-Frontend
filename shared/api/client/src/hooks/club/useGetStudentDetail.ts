import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubStudentResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetStudentDetail = (
  club_id: string,
  student_id: string,
  options?: UseQueryOptions<ClubStudentResponseTypes>
) =>
  useQuery<ClubStudentResponseTypes, AxiosError>(
    clubQueryKeys.getStudentDetail(),
    () => get(clubUrl.studentDetail(club_id, student_id)),
    options
  )
