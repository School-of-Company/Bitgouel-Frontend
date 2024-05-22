'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, SignUpCommonPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpBbozzak = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    SignUpCommonPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, SignUpCommonPayloadTypes>(
    authQueryKeys.postSignUpBbozzak(),
    (signUpValues) => post(authUrl.signUpBbozzak(), signUpValues)
  )
