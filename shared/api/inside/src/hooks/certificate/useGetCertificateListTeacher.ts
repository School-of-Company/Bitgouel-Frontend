import { CertificateResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { certificateQueryKeys, certificateUrl, get } from '../../../../common'

export const useGetCertificateListTeacher = (
  student_id: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<CertificateResponseTypes>>(
    certificateQueryKeys.getCertificateListTeacher(student_id),
    () => get(certificateUrl.certificateListTeacher(student_id)),
    options
  )
