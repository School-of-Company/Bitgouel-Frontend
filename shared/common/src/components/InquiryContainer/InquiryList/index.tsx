import { InquiryListResponseTypes } from '@bitgouel/types'
import InquiryItem from '../../InquiryItem'
import * as S from './style'
import NoneResult from '../../NoneResult'

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
        {isLoading && <div>강의 목록을 불러오는 중...</div>}
        {inquiryList?.inquiries && inquiryList.inquiries.length <= 0 ? (
          <NoneResult notDataTitle={'문의 목록이'} />
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
