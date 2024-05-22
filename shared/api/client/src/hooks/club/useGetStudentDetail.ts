import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubStudentResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetStudentDetail = (
  id: string,
  studentId: string,
  options?: UseQueryOptions<ClubStudentResponseTypes>
) =>
  useQuery<ClubStudentResponseTypes, AxiosError>(
    clubQueryKeys.getStudentDetail(id, studentId),
    () => get(clubUrl.studentDetail(id, studentId)),
    options
  )
