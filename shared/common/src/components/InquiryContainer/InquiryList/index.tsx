import { InquiryListResponseTypes } from '@bitgouel/types'
import InquiryItem from '../../InquiryItem'
import * as S from './style'
import NoneResult from '../../NoneResult'
import WaitingAnimation from '../../WaitingAnimation'

const InquiryList = ({
  inquiryList,
  isLoading,
}: {
  inquiryList: InquiryListResponseTypes | undefined
  isLoading: boolean
}) => {
  return (
    <S.ListWrapper>
      <S.ListContainer>
        {isLoading && <WaitingAnimation title={'문의 목록을'} />}
        {inquiryList?.inquiries && inquiryList.inquiries.length <= 0 ? (
          <NoneResult title={'문의 목록이'} />
        ) : (
          inquiryList?.inquiries.map((inquiry) => (
            <InquiryItem item={inquiry} key={inquiry.id} />
          ))
        )}
      </S.ListContainer>
    </S.ListWrapper>
  )
}

export default InquiryList
