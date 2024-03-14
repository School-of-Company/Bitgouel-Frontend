import { InquiryModifyPage } from '@/PageContainer'

const InquiryModify = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryModifyPage inquiryId={params.inquiryId} />
}

export default InquiryModify
