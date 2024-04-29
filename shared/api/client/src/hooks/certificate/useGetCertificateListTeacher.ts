import { certificateQueryKeys, certificateUrl, get } from '@bitgouel/api'
import { CertificateResponseTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetCertificateListTeacher = (
  student_id: string,
  options?: UseQueryOptions<CertificateResponseTypes>
) =>
  useQuery<CertificateResponseTypes, AxiosError>(
    certificateQueryKeys.getCertificateListTeacher(student_id),
    () => get(certificateUrl.certificateListTeacher(student_id)),
    options
  )
