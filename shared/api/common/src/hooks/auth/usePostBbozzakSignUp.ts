'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, BbozzakPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpBbozzak = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    BbozzakPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, BbozzakPayloadTypes>(
    authQueryKeys.postSignUpBbozzak(),
    (signUpValues) => post(authUrl.signUpBbozzak(), signUpValues)
  )
