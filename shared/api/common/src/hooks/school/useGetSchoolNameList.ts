import { get, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface SchoolNameListResponseType {
  schools: { name: string }[]
}

export const useGetSchoolNameList = (
  options?: UseQueryOptions<SchoolNameListResponseType, AxiosError>
) =>
  useQuery<SchoolNameListResponseType, AxiosError>(
    schoolQueryKeys.getSchoolNameList(),
    () => get(schoolUrl.schoolNameList()),
    options
  )
