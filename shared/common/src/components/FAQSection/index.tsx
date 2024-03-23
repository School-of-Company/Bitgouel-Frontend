'use client'

import { useGetListQuestions } from '@bitgouel/api'
import { FAQAnswerItem, FAQItem } from '@bitgouel/common'
import * as S from './style'

const FAQSection = () => {
  const { data } = useGetListQuestions()

  return (
    <S.FAQSectionWrapper>
      <S.FAQSectionContainer>
        <S.TitleBox>
          <S.SemiTitle>FAQ</S.SemiTitle>
          <S.Title>자주 묻는 질문</S.Title>
        </S.TitleBox>
        <S.FAQList>
          {data?.data.faqs.map((item) => (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
          <FAQAnswerItem />
        </S.FAQList>
      </S.FAQSectionContainer>
    </S.FAQSectionWrapper>
  )
}
export default FAQSection
