import { activityQueryKeys, activityUrl, patch } from '@bitgouel/api'
import { ActivityPayloadTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePatchActivityModifyInformation = (
  activityId: string,
  options?: UseMutationOptions<void, Error, ActivityPayloadTypes>
) =>
  useMutation<void, Error, ActivityPayloadTypes>(
    activityQueryKeys.patchActivityModifyInformation(activityId),
    (value) => patch(activityUrl.activityModifyInformation(activityId), value),
    options
  )
