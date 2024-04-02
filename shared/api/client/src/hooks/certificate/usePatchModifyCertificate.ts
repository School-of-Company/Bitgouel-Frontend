import { certificateQueryKeys, certificateUrl, patch } from '@bitgouel/api'
import { Certificate } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchModifyCertificate = (
  id: string | undefined,
  options: UseMutationOptions<void, Error, Certificate>
) => {
  return useMutation<void, AxiosError, Certificate>(
    certificateQueryKeys.patchCertificateModify(id || ''),
    (modifyValue) =>
      patch(certificateUrl.certificateModify(id || ''), modifyValue),
    options
  )
}
