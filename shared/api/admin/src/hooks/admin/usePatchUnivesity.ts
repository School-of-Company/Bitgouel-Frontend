import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { adminQueryKeys, adminUrl, patch } from '../../../../common'

export const usePatchUniversity = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, { universityName: string }>
) =>
  useMutation<void, AxiosError, { universityName: string }>(
    adminQueryKeys.patchUniversity(id),
    (modifyValues) => patch(adminUrl.universityModify(id), modifyValues),
    options
  )
