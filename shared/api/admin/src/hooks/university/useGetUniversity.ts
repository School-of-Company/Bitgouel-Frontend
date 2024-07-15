import { adminQueryKeys, adminUrl, get, universityQueryKeys, universityUrl } from '@bitgouel/api'
import { UniversityResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetUniversity = (
  options?: UseQueryOptions<UniversityResponseTypes>
) =>
  useQuery<UniversityResponseTypes, AxiosError>(
    universityQueryKeys.getUniversity(),
    () => get(universityUrl.universityList()),
    options
  )
