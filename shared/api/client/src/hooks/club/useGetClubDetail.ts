import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { ClubDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetClubDetail = (
  clubId: string,
  options?: UseQueryOptions<ClubDetailResponseTypes>
) => {
  console.log(clubId)
  return useQuery<ClubDetailResponseTypes, AxiosError>(
    clubQueryKeys.getClubDetail(clubId),
    () => get(clubUrl.clubDetail(clubId)),
    options
  )
}
