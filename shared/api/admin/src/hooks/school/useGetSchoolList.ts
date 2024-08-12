import { get, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { SchoolListResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetSchoolList = (
  options?: UseQueryOptions<SchoolListResponseTypes, AxiosError>
) =>
  useQuery<SchoolListResponseTypes, AxiosError>(
    schoolQueryKeys.getSchool(),
    () => get(schoolUrl.school()),
    options
  )
