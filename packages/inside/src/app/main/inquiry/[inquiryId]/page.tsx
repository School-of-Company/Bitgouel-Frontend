import { InquiryDetailPage } from '@bitgouel/common/src/pages'

const InquiryDetail = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryDetailPage inquiryId={params.inquiryId} />
}

export default InquiryDetail
