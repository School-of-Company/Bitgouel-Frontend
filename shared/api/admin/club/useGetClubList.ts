import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'

export const useGetClubList = (
  queryString: string,
  options?: UseQueryOptions<ClubListResponseTypes>
) =>
  useQuery<ClubListResponseTypes, ApiError>(
    clubQueryKeys.getClub(),
    () => get(clubUrl.club(queryString)),
    options
  )
