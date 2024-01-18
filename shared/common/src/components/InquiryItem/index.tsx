'use client'

import { InquiryTypes } from '@bitgouel/types'
import * as S from './style'
import { useRouter } from 'next/navigation'

const InquiryItem = ({ item }: { item: InquiryTypes }) => {
  const { push } = useRouter()

  return (
    <S.InquiryItemWrapper onClick={() => push(`/main/inquiry/${item.id}`)}>
      <S.SubTitle>
        <S.Name>{item.username}</S.Name>
        <S.Date>{`${item.createdAt.slice(0, 4)}.${item.createdAt.slice(
          5,
          7
        )}.${item.createdAt.slice(8, 10)}`}</S.Date>
      </S.SubTitle>
      <S.Title>{item.question}</S.Title>
      <S.SubMenuContainer>
        <S.StatusFrom
          status={item.answerStatus}
        >
          답변 대기 중
        </S.StatusFrom>
      </S.SubMenuContainer>
    </S.InquiryItemWrapper>
  )
}
export default InquiryItem
