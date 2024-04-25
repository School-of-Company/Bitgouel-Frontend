import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { SchoolClubListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'

export const useGetSchoolClubList = (
  options?: UseQueryOptions<SchoolClubListResponseTypes>
) =>
  useQuery<SchoolClubListResponseTypes, ApiError>(
    clubQueryKeys.getSchoolClub(),
    () => get(clubUrl.schoolClub()),
    options
  )
