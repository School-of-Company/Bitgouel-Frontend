import { Certificate } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { certificateQueryKeys, certificateUrl, patch } from '../../../../common'

export const usePatchModifyCertificate = (studentId: string, id: string) => {
  return useMutation<void, AxiosError, Certificate>(
    certificateQueryKeys.patchCertificateModify(studentId, id),
    (modifyValue) =>
      patch(certificateUrl.certificateModify(studentId, id), modifyValue)
  )
}
