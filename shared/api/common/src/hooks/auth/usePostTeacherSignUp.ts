'use client'

import { ApiErrorTypes, TeacherPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { authQueryKeys, authUrl, post } from '../../libs'

export const usePostSignUpTeacher = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, TeacherPayloadTypes>(
    authQueryKeys.postSignUpTeacher(),
    (signUpValues) => post(authUrl.signUpTeacher(), signUpValues),
    {
      onSuccess: () => {
        setPage(4)
      },
      onError: ({ response }) => {
        toast.error(response?.data.message.split('.')[0])
      },
    }
  )
}
