'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { CompanyPayloadTypes } from '@bitgouel/types'

export const usePostSignUpCompanyInstructor = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError, CompanyPayloadTypes>(
    authQueryKeys.postSignUpCompanyInstructor(),
    (signUpValues) => post(authUrl.signUpCompanyInstructor(), signUpValues),
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
