import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityPayloadTypes } from '@bitgouel/types'

export const usePatchActivityModifyInformation = (activityId: string) =>
  useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.patchActivityModifyInformation(activityId),
    (value) => patch(activityUrl.activityModifyInformation(activityId), value),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
