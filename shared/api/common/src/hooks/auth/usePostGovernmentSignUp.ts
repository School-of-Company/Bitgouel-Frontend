'use client'

import { ApiErrorTypes, GovernmentPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { authQueryKeys, authUrl, post } from '../../libs'

export const usePostSignUpGovernment = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, GovernmentPayloadTypes>(
    authQueryKeys.postSignUpGoverment(),
    (signUpValues) => post(authUrl.signUpGovernment(), signUpValues),
    {
      onSuccess: () => {
        setPage(4)
      },
      onError: ({ response }) => {
        toast.error(response.data.message.split('.')[0])
      },
    }
  )
}
