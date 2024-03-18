import { ApiErrorTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { emailQueryKeys, emailUrl, get } from '../../libs'

export const useGetEmail = (
  sendValue: { email: string },
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<
    AxiosResponse<{ isAuthentication: boolean }>,
    AxiosError<ApiErrorTypes>
  >(
    emailQueryKeys.getEmail(),
    () => get(emailUrl.email(), { params: sendValue }),
    options
  )
