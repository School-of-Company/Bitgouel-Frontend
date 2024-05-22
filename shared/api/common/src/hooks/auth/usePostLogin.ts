'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import {
  LoginErrorTypes,
  LoginPayloadTypes,
  LoginResponseTypes,
} from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostLogin = (
  options?: UseMutationOptions<
    LoginResponseTypes,
    AxiosError<LoginErrorTypes>,
    LoginPayloadTypes
  >
) =>
  useMutation<
    LoginResponseTypes,
    AxiosError<LoginErrorTypes>,
    LoginPayloadTypes
  >(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    options
  )
