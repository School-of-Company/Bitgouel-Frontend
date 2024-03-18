'use client'

import { authQueryKeys, authUrl, post } from '@bitgouel/api'
import { ApiErrorTypes, TeacherPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostSignUpTeacher = (
  options: UseMutationOptions<
    void,
    AxiosError<ApiErrorTypes>,
    TeacherPayloadTypes
  >
) =>
  useMutation<void, AxiosError<ApiErrorTypes>, TeacherPayloadTypes>(
    authQueryKeys.postSignUpTeacher(),
    (signUpValues) => post(authUrl.signUpTeacher(), signUpValues),
    options
  )
