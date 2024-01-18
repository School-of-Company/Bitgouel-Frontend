import { SchoolClubListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'
import { clubQueryKeys, clubUrl, get } from '../../common'

export const useGetSchoolClubList = (
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<SchoolClubListResponseTypes>, AxiosError<ApiError>>(
    clubQueryKeys.getSchoolClub(),
    () => get(clubUrl.schoolClub()),
    options
  )
