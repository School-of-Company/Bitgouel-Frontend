import { governmentQueryKeys, governmentUrl, post } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface GovernmentPayloadType {
  governmentName: string
  field: string
}

export const usePostGovernment = (
  options?: UseMutationOptions<void, AxiosError, GovernmentPayloadType>
) =>
  useMutation<void, AxiosError, GovernmentPayloadType>(
    governmentQueryKeys.postGovernment(),
    () => post(governmentUrl.governmentCreate()),
    options
  )
