'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosError } from 'axios'

export const usePostSignUpStudent = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError>(
    authQueryKeys.postSignUpStudent(),
    (signUpValues) => post(authUrl.signUpStudent(), signUpValues),
    {
      onSuccess: (data) => {
        return setPage(4)
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
