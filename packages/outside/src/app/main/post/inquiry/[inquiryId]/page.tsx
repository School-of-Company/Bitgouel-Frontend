import { InquiryDetailPage } from '@bitgouel/common'

const InquiryDetail = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryDetailPage inquiryId={params.inquiryId} isAdmin={true} />
}

export default InquiryDetail
