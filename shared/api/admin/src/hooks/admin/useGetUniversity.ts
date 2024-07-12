import { adminQueryKeys, adminUrl, get } from '@bitgouel/api'
import { UniversityResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetUniversity = (
  options?: UseQueryOptions<UniversityResponseTypes>
) =>
  useQuery<UniversityResponseTypes, AxiosError>(
    adminQueryKeys.getUniversity(),
    () => get(adminUrl.universityList()),
    options
  )
