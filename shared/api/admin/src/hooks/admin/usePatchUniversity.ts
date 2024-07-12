import {
    patch,
    universityQueryKeys,
    universityUrl
} from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchUniversity = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, { universityName: string }>
) =>
  useMutation<void, AxiosError, { universityName: string }>(
    universityQueryKeys.patchUniversity(id),
    (modifyValues) => patch(universityUrl.universityModify(id), modifyValues),
    options
  )
