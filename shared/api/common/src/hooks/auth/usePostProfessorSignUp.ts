'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosError } from 'axios'
import { ProfessorPayloadTypes } from '@bitgouel/types'

export const usePostSignUpProfessor = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError, ProfessorPayloadTypes>(
    authQueryKeys.postSignUpProfessor(),
    (signUpValues) => post(authUrl.signUpPropessor(), signUpValues),
    {
      onSuccess: () => {
        setPage(4)
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
