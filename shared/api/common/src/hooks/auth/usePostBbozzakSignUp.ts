'use client'

import { ApiErrorTypes, BbozzakPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { authQueryKeys, authUrl, post } from '../../libs'

export const usePostSignUpBbozzak = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, BbozzakPayloadTypes>(
    authQueryKeys.postSignUpBbozzak(),
    (signUpValues) => post(authUrl.signUpBbozzak(), signUpValues),
    {
      onSuccess: () => {
        return setPage(4)
      },
      onError: ({ response }) => {
        toast.error(response?.data.message.split('.')[0])
      },
    }
  )
}
