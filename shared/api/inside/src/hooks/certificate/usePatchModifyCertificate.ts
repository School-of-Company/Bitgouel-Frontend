import { Certificate } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { certificateQueryKeys, certificateUrl, patch } from '../../../../common'

export const usePatchModifyCertificate = (id: string | undefined) => {
  return useMutation<void, AxiosError, Certificate>(
    certificateQueryKeys.patchCertificateModify(id ? id : ''),
    (modifyValue) =>
      patch(certificateUrl.certificateModify(id ? id : ''), modifyValue)
  )
}
