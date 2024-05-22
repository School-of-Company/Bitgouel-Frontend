import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetMyClub = (
  options?: UseQueryOptions<ClubDetailResponseTypes>
) =>
  useQuery<ClubDetailResponseTypes, AxiosError>(
    clubQueryKeys.getMyClub(),
    () => get(clubUrl.myClub()),
    options
  )
