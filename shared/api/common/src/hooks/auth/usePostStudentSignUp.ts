import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { AxiosResponse } from 'axios'

export const usePostSignUpStudent = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<
    AxiosResponse,
    Error,
    {
      email: string
      name: string
      phoneNumber: string
      password: string
      highSchool: string
      clubName: String
      grade: number
      classRoom: number
      number: number
      admissionNumber: number
    }
  >(
    authQueryKeys.postSignUpStudent(),
    (signUpValues) => post(authUrl.signUpStudent(), signUpValues),
    {
      onSuccess: (data) => {
        return setPage(4)
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
