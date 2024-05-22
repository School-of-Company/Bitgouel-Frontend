import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { SchoolClubListResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetSchoolClubList = (
  options?: UseQueryOptions<SchoolClubListResponseTypes>
) =>
  useQuery<SchoolClubListResponseTypes, AxiosError>(
    clubQueryKeys.getSchoolClub(),
    () => get(clubUrl.schoolClub()),
    options
  )
