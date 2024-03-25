import { certificateQueryKeys, certificateUrl, get } from '@bitgouel/api'
import { CertificateResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useGetCertificateList = (
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<CertificateResponseTypes>>(
    certificateQueryKeys.getCertificateListStudent(),
    () => get(certificateUrl.certificate()),
    options
  )
