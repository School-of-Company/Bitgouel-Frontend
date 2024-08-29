import { adminQueryKeys, adminUrl, get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetClubExcel = (
  options?: UseQueryOptions<Blob, AxiosError>
) =>
  useQuery<Blob, AxiosError>(
    adminQueryKeys.getClubExcelDownload(),
    () =>
      get(adminUrl.clubExcelDownload(), {
        responseType: 'blob',
      }),
    options
  )
