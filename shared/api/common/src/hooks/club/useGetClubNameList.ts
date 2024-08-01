import { clubQueryKeys, clubUrl, get } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface ClubNameListResponseType {
  clubs: { name: string }[]
}

export const useGetClubNameList = (
  schoolName: string,
  options?: UseQueryOptions<ClubNameListResponseType, AxiosError>
) =>
  useQuery<ClubNameListResponseType, AxiosError>(
    clubQueryKeys.getClubNameList(schoolName),
    () => get(clubUrl.clubNameList(schoolName)),
    options
  )
