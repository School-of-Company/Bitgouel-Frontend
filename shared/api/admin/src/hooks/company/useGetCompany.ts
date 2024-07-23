import { companyQueryKeys, companyUrl, get } from '@bitgouel/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface CompanyItemType {
  id: number
  name: string
  field: string // 학교 목록 완성 후 타입 적용
}

interface CompanyResponseType {
  companies: CompanyItemType[]
}

export const useGetCompany = (
  options?: UseQueryOptions<CompanyResponseType, AxiosError>
) =>
  useQuery<CompanyResponseType, AxiosError>(
    companyQueryKeys.getCompany(),
    () => get(companyUrl.company()),
    options
  )
