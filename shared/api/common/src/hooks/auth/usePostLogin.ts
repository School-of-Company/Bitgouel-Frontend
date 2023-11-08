import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosResponse } from 'axios'
import TokenManager from '../../libs/api/TokenManager'
import Route from 'next/router'

const tokenManager = new TokenManager()

export const usePostLogin = () =>
  useMutation<AxiosResponse, Error, { email: string; password: string }>(
    authQueryKeys.postLogin(),
    (loginValues) => post(authUrl.login(), loginValues),
    {
      onSuccess: ({ data }) => {
        tokenManager.setTokens(data)
        return Route.push('/')
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
