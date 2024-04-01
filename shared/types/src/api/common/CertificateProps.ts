import { Certificate } from '../client'

export interface CertificateProps {
  certificateItems: Certificate
  isOpenCalendar: boolean
  refetchModify: () => void
}
