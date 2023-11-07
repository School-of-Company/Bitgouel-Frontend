import { useMutation } from '@tanstack/react-query'

import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { TokenResponseType } from '../../../../../types/src/tokenResponseType'
import Route from 'next/router'

export const usePostSignUpProfessor = () =>
  useMutation<
    TokenResponseType,
    Error,
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
      onSuccess: (data) => {
        return Route.push('/auth/signUpSuccess')
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
