import { companyQueryKeys, companyUrl, post } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { CompanyItemType } from './useGetCompany'

export const usePostCompany = (
  options?: UseMutationOptions<void, AxiosError, Omit<CompanyItemType, 'id'>>
) =>
  useMutation<void, AxiosError, Omit<CompanyItemType, 'id'>>(
    companyQueryKeys.postCompany(),
    (createValues) => post(companyUrl.companyCreate(), createValues),
    options
  )
