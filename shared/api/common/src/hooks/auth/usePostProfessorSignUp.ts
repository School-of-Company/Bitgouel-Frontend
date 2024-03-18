'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, ProfessorPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpProfessor = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    ProfessorPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, ProfessorPayloadTypes>(
    authQueryKeys.postSignUpProfessor(),
    (signUpValues) => post(authUrl.signUpProfessor(), signUpValues),
    options
  )
