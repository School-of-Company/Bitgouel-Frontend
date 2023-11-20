'use client'

import { useMutation } from '@tanstack/react-query'
import { lectureQueryKeys } from '../../../../common'
import { lectureUrl } from '../../../../common'
import { post } from '../../../../common'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useModal } from '@bitgouel/common'

export const usePostApplicationLecture = (id: string) => {
  const router = useRouter()
  const { closeModal } = useModal()

  return useMutation<AxiosResponse, AxiosError>(
    lectureQueryKeys.postLectureApplication(id),
    () => post(lectureUrl.lectureApplication(id), {}),
    {
      onSuccess: (data) => {
        closeModal()
        router.push('/main/lecture')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
}
