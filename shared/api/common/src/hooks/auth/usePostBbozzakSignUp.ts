'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { BbozzakPayloadTypes } from '@bitgouel/types'

export const usePostSignUpBbozzak = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError, BbozzakPayloadTypes>(
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
