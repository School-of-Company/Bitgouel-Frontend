import { InquiryDetailPage } from '@bitgouel/common'

const InquiryDetail = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryDetailPage inquiryId={params.inquiryId} isAdmin={false} />
}

export default InquiryDetail
