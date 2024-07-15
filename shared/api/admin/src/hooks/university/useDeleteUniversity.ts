import { del, universityQueryKeys, universityUrl } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteUniversity = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    universityQueryKeys.deleteUniversity(id),
    () => del(universityUrl.universityDelete(id)),
    options
  )
