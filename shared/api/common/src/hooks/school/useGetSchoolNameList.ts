import { get, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface SchoolListResponseType {
  schools: { name: string }[]
}

export const useGetSchoolNameList = (
  options?: UseQueryOptions<SchoolListResponseType, AxiosError>
) =>
  useQuery<SchoolListResponseType, AxiosError>(
    schoolQueryKeys.getSchoolNameList(),
    () => get(schoolUrl.schoolNameList()),
    options
  )
