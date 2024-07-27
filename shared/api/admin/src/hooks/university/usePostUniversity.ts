import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { post, universityQueryKeys, universityUrl } from '@bitgouel/api'

export const usePostUniversity = (
  options?: UseMutationOptions<void, AxiosError, { universityName: string }>
) =>
  useMutation<void, AxiosError, { universityName: string }>(
    universityQueryKeys.postUniversity(),
    (createValues) => post(universityUrl.universityCreate(), createValues),
    options
  )
