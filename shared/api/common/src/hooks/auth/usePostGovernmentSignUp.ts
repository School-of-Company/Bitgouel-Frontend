'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, GovernmentPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpGovernment = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    GovernmentPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, GovernmentPayloadTypes>(
    authQueryKeys.postSignUpGoverment(),
    (signUpValues) => post(authUrl.signUpGovernment(), signUpValues),
    options
  )
