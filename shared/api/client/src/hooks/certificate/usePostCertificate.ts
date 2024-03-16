import { CertificateRequest } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { certificateQueryKeys, certificateUrl, post } from '../../../../common'

export const usePostCertificate = () => {
  return useMutation<void, AxiosError, CertificateRequest>(
    certificateQueryKeys.postCertificateCreate(),
    (creatValue) => post(certificateUrl.certificate(), creatValue)
  )
}
