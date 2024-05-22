'use client'

import { InquiryTypes } from '@bitgouel/types'
import * as S from './style'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

const InquiryItem = ({ item }: { item: InquiryTypes }) => {
  const { push } = useRouter()

  return (
    <S.InquiryItemWrapper onClick={() => push(`/main/post/inquiry/${item.id}`)}>
      <S.SubTitle>
        <S.Name>{item.username}</S.Name>
        <S.Date>{dayjs(item.createdAt).format('YYYY.MM.DD')}</S.Date>
      </S.SubTitle>
      <S.Title>{item.question}</S.Title>
      <S.SubMenuContainer>
        <S.StatusFrom status={item.answerStatus}>
          {item.answerStatus === 'ANSWERED' ? '답변 완료됨' : '답변 대기 중'}
        </S.StatusFrom>
      </S.SubMenuContainer>
    </S.InquiryItemWrapper>
  )
}
export default InquiryItem
