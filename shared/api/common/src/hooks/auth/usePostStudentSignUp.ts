'use client'

import { useMutation } from '@tanstack/react-query'
import { post, authQueryKeys, authUrl } from '../../libs'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosError } from 'axios'
import { ApiErrorTypes, StudentPayloadTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'

export const usePostSignUpStudent = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, StudentPayloadTypes>(
    authQueryKeys.postSignUpStudent(),
    (signUpValues) => post(authUrl.signUpStudent(), signUpValues),
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
