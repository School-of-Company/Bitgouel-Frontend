'use client'

import { FAQAnswerItem, FAQItem } from '@bitgouel/common'
import * as S from './style'

const FAQSection = () => {
  return (
    <S.FAQSectionWrapper>
      <S.FAQSectionContainer>
        <S.TitleBox>
          <S.SemiTitle>FAQ</S.SemiTitle>
          <S.Title>자주 묻는 질문</S.Title>
        </S.TitleBox>
        <S.FAQList>
          <FAQItem />
          <FAQAnswerItem />
        </S.FAQList>
      </S.FAQSectionContainer>
    </S.FAQSectionWrapper>
  )
}
export default FAQSection
