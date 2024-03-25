import { ClubDetailResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'
import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'

export const useGetMyClub = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<ClubDetailResponseTypes>, AxiosError<ApiError>>(
    clubQueryKeys.getMyClub(),
    () => get(clubUrl.myClub()),
    options
  )
