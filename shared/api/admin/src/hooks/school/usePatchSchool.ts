import { patch, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { RegistrationTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePatchSchool = (
  id: number,
  options?: UseMutationOptions<void, Error, FormData>
) =>
  useMutation<void, Error, FormData>(
    schoolQueryKeys.patchSchool(id),
    (modifyValues) =>
      patch(schoolUrl.schoolModify(id), modifyValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    options
  )
