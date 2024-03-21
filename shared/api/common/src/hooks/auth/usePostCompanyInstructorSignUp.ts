'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, CompanyPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpCompanyInstructor = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    CompanyPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, CompanyPayloadTypes>(
    authQueryKeys.postSignUpCompanyInstructor(),
    (signUpValues) => post(authUrl.signUpCompanyInstructor(), signUpValues),
    options
  )
