'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosError } from 'axios'

export const usePostSignUpProfessor = () => {
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
      university: string
    }
  >(
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
