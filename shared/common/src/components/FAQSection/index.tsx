'use client'

import { useGetListQuestions } from '@bitgouel/api'
import { FAQAnswerItem, FAQItem, useScroll } from '@bitgouel/common'
import * as S from './style'
import { useRef } from 'react'
import { FAQListQuestionsTypes } from '@bitgouel/types'

const FAQSection = ({
  faqInitialData,
}: {
  faqInitialData: FAQListQuestionsTypes
}) => {
  const target = useRef(null)
  const { isVisible } = useScroll({ target, option: { threshold: 0.1 } })
  const { data, refetch } = useGetListQuestions({
    initialData: faqInitialData,
  })

  return (
    <S.FAQSectionWrapper
      ref={target}
      className={isVisible ? 'fade-in' : 'hidden'}
    >
      <S.FAQSectionContainer>
        <S.TitleBox>
          <S.SemiTitle>FAQ</S.SemiTitle>
          <S.Title>자주 묻는 질문</S.Title>
        </S.TitleBox>
        <S.FAQList>
          {data?.faqs &&
            data.faqs.length > 0 &&
            data.faqs.map((item) => (
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
