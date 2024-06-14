import { InquiryWritePage } from '@inside/PageContainer'

const InquiryModifyPage = ({ params }: { params: { inquiryId: string } }) => {
  return <InquiryWritePage inquiryId={params.inquiryId} />
}

export default InquiryModifyPage
