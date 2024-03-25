import { certificateQueryKeys, certificateUrl, post } from '@bitgouel/api'
import { CertificateRequest } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePostCertificate = (
  options: UseMutationOptions<void, Error, CertificateRequest>
) => {
  return useMutation<void, AxiosError, CertificateRequest>(
    certificateQueryKeys.postCertificateCreate(),
    (createValue) => post(certificateUrl.certificate(), createValue),
    options
  )
}
