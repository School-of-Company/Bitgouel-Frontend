import { activityQueryKeys, activityUrl, post } from '@bitgouel/api'
import { ActivityPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePostActivityInformation = (
  options: UseMutationOptions<void, Error, ActivityPayloadTypes>
) =>
  useMutation<void, Error, ActivityPayloadTypes>(
    activityQueryKeys.postActivityInformation(),
    (value) => post(activityUrl.activityInformation(), value),
    options
  )
