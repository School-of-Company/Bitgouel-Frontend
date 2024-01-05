'use client'

import { useMutation } from '@tanstack/react-query'
import { post, authQueryKeys, authUrl } from '../../libs'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosError } from 'axios'
import { ApiErrorTypes, ProfessorPayloadTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'

export const usePostSignUpProfessor = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, ProfessorPayloadTypes>(
    authQueryKeys.postSignUpProfessor(),
    (signUpValues) => post(authUrl.signUpPropessor(), signUpValues),
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
