'use client'

import {
  LoginErrorTypes,
  LoginPayloadTypes,
  LoginResponseTypes,
} from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { authQueryKeys, authUrl, post } from '../../libs'

export const usePostLogin = (
  options: UseMutationOptions<
    AxiosResponse<LoginResponseTypes>,
    AxiosError<LoginErrorTypes>,
    LoginPayloadTypes
  >
) =>
  useMutation<
    AxiosResponse<LoginResponseTypes>,
    AxiosError<LoginErrorTypes>,
    LoginPayloadTypes
  >(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    options
  )
