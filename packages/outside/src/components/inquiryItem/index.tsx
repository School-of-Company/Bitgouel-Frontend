'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'

const InquiryItem = () => {
  const { push } = useRouter()

  return (
    <S.InquiryItemWrapper onClick={() => push(`/main/inquiry/detail`)}>
      <S.SubTitle>
        <S.Name>홍길동</S.Name>
        <S.Date>2024.01.14</S.Date>
      </S.SubTitle>
      <S.Title>문의가 문의문의해서 문의문의한 게 문의문의해요</S.Title>
      <S.MainTextContainer>
        <S.MainText>문 의</S.MainText>
      </S.MainTextContainer>
      <S.SubMenuContainer>
        <S.StatusFrom
          status={'PENDING'}
          display={'ROLE_ADMIN' !== 'ROLE_ADMIN' ? 'none' : ''}
        >
          답변 대기 중
        </S.StatusFrom>
      </S.SubMenuContainer>
    </S.InquiryItemWrapper>
  )
}
export default InquiryItem
