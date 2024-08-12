import { get, governmentQueryKeys, governmentUrl } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface GovernmentItemType {
  id: string
  governmentName: string
  field: string
}

interface GovernmentResponseType {
  governments: GovernmentItemType[]
}

export const useGetGovernment = (
  options?: UseQueryOptions<GovernmentResponseType, AxiosError>
) =>
  useQuery<GovernmentResponseType, AxiosError>(
    governmentQueryKeys.getGovernment(),
    () => get(governmentUrl.governmentList()),
    options
  )
