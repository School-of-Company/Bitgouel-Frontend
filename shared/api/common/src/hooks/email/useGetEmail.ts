import { emailQueryKeys, emailUrl, get } from '@bitgouel/api'
import { ApiErrorTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetEmail = (
  sendValue: { email: string },
  options?: UseQueryOptions<{ isAuthentication: boolean }>
) =>
  useQuery<{ isAuthentication: boolean }, AxiosError<ApiErrorTypes>>(
    emailQueryKeys.getEmail(),
    () => get(emailUrl.email(), { params: sendValue }),
    options
  )
