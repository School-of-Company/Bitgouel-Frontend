import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetClubDetail = (
  club_id: string,
  options?: UseQueryOptions<ClubDetailResponseTypes>
) =>
  useQuery<ClubDetailResponseTypes, AxiosError>(
    clubQueryKeys.getClubDetail(),
    () => get(clubUrl.clubDetail(club_id)),
    options
  )
