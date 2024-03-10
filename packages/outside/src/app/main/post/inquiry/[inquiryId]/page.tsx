import { InquiryDetailPage } from '@bitgouel/common/src/pages'

const InquiryDetail = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryDetailPage inquiryId={params.inquiryId} isAdmin={true} />
}

export default InquiryDetail
