import { clubQueryKeys, clubUrl, get } from '../../../../common'
import { ClubDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'

export const useGetClubDetail = (club_id: string, options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<ClubDetailResponseTypes>, AxiosError<ApiError>>(
    clubQueryKeys.getClubDetail(),
    () => get(clubUrl.clubDetail(club_id)),
    options
  )
