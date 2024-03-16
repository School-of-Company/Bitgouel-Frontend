import { ActivityPayloadTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { activityQueryKeys, activityUrl, post } from '../../../../common'

export const usePostActivityInformation = () =>
  useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.postActivityInformation(),
    (value) => post(activityUrl.activityInformation(), value),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
