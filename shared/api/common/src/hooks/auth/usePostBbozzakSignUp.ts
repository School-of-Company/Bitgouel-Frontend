'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'

export const usePostSignUpBbozzak = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<
    void,
    AxiosError,
    {
      email: string
      name: string
      phoneNumber: string
      password: string
      highSchool: string
      clubName: string
    }
  >(
    authQueryKeys.postSignUpBbozzak(),
    (signUpValues) => post(authUrl.signUpBbozzak(), signUpValues),
    {
      onSuccess: () => {
        return setPage(4)
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
