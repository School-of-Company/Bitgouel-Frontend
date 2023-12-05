import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, post, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityPayloadTypes } from '@bitgouel/types'

export const usePostActivityInformation = () =>
  useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.postActivityInformation(),
    () => post(activityUrl.activityInformation(), {}),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
