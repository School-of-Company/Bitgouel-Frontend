import { ActivityPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { activityQueryKeys, activityUrl, post } from '../../../../common'

export const usePostActivityInformation = (
  options: UseMutationOptions<void, Error, ActivityPayloadTypes>
) =>
  useMutation<void, Error, ActivityPayloadTypes>(
    activityQueryKeys.postActivityInformation(),
    (value) => post(activityUrl.activityInformation(), value),
    options
  )
