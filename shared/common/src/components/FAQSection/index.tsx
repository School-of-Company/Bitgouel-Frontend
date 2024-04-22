'use client'

import { useGetListQuestions } from '@bitgouel/api'
import { FAQAnswerItem, FAQItem } from '@bitgouel/common'
import * as S from './style'
import { FAQListQuestionsTypes } from '@bitgouel/types'

const FAQSection = () => {
  const { data, refetch } = useGetListQuestions()
  const { faqs } = data?.data || ({} as FAQListQuestionsTypes)

  return (
    <S.FAQSectionWrapper>
      <S.FAQSectionContainer>
        <S.TitleBox>
          <S.SemiTitle>FAQ</S.SemiTitle>
          <S.Title>자주 묻는 질문</S.Title>
        </S.TitleBox>
        <S.FAQList>
          {faqs?.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
          <FAQAnswerItem refetchFAQs={refetch} />
        </S.FAQList>
      </S.FAQSectionContainer>
    </S.FAQSectionWrapper>
  )
}
export default FAQSection
