import { post, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePostRegistrationSchool = (
  options: UseMutationOptions<void, Error, FormData>
) =>
  useMutation<void, Error, FormData>(
    schoolQueryKeys.postRegistrationSchool(),
    (createValues) =>
      post(schoolUrl.school(), createValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    options
  )
