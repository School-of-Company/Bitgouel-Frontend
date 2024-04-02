import { UseQueryResult } from '@tanstack/react-query'
import { Certificate } from '../client'

export interface CertificateProps {
  certificateItems: Certificate
  isOpenCalendar: boolean
  refetchModify: () => Promise<UseQueryResult>
}
