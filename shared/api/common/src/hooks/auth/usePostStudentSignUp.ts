'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, StudentPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpStudent = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    StudentPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, StudentPayloadTypes>(
    authQueryKeys.postSignUpStudent(),
    (signUpValues) => post(authUrl.signUpStudent(), signUpValues),
    options
  )
