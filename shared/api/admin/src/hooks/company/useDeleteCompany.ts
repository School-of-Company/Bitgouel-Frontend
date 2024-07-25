import { companyQueryKeys, companyUrl, del } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteCompany = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    companyQueryKeys.deleteCompany(id),
    () => del(companyUrl.companyDelete(id)),
    options
  )
