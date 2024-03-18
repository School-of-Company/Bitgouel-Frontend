'use client'

import { ApiErrorTypes, CompanyPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { authQueryKeys, authUrl, post } from '../../libs'

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
