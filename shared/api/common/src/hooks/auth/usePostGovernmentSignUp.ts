'use client'

import { ApiErrorTypes, GovernmentPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { authQueryKeys, authUrl, post } from '../../libs'

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
