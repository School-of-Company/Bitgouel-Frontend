import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetClubList = (
  queryString: string,
  options?: UseQueryOptions<ClubListResponseTypes>
) =>
  useQuery<ClubListResponseTypes, AxiosError>(
    clubQueryKeys.getClub(),
    () => get(clubUrl.club(queryString)),
    options
  )
