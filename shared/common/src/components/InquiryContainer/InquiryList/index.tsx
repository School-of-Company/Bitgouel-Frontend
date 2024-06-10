import { InquiryListResponseTypes } from '@bitgouel/types'
import InquiryItem from '../../InquiryItem'
import * as S from './style'

const InquiryList = ({
  inquiryList,
}: {
  inquiryList: InquiryListResponseTypes
}) => {
  return (
    <S.ListWrapper>
      <S.ListContainer>
        {inquiryList?.inquiries.map((inquiry) => (
          <InquiryItem item={inquiry} key={inquiry.id} />
        ))}
      </S.ListContainer>
    </S.ListWrapper>
  )
}

export default InquiryList
