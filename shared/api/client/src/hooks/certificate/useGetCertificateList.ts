import { certificateQueryKeys, certificateUrl, get } from '@bitgouel/api'
import { CertificateResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetCertificateList = (
  options?: UseQueryOptions<CertificateResponseTypes>
) =>
  useQuery<CertificateResponseTypes, AxiosError>(
    certificateQueryKeys.getCertificateListStudent(),
    () => get(certificateUrl.certificate()),
    options
  )
