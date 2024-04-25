'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import {
  LoginErrorTypes,
  LoginPayloadTypes,
  LoginResponseTypes,
} from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePostLogin = (
  options: UseMutationOptions<
    LoginResponseTypes,
    LoginErrorTypes,
    LoginPayloadTypes
  >
) =>
  useMutation<LoginResponseTypes, LoginErrorTypes, LoginPayloadTypes>(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    options
  )
