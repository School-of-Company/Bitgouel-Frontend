import { get, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetSchoolNameList = (
  options?: UseQueryOptions<string[], AxiosError>
) =>
  useQuery<string[], AxiosError>(
    schoolQueryKeys.getSchoolNameList(),
    () => get(schoolUrl.schoolNameList()),
    options
  )
