'use client'

import { useMutation } from '@tanstack/react-query'
import { post, authQueryKeys, authUrl } from '../../libs'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { ApiErrorTypes, CompanyPayloadTypes } from '@bitgouel/types'
import { toast } from 'react-toastify'

export const usePostSignUpCompanyInstructor = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError<ApiErrorTypes>, CompanyPayloadTypes>(
    authQueryKeys.postSignUpCompanyInstructor(),
    (signUpValues) => post(authUrl.signUpCompanyInstructor(), signUpValues),
    {
      onSuccess: () => {
        setPage(4)
      },
      onError: ({ response }) => {
        toast.error(response?.data.message.split('.')[0])
      },
    }
  )
}
