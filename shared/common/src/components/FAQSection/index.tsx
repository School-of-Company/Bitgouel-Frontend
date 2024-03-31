'use client'

import { useEffect, useState } from 'react'
import { FAQItem, FAQAnswerItem } from '@bitgouel/common'
import * as S from './style'
import { FAQTypes } from '@bitgouel/types'
import { useGetListQuestions } from '@bitgouel/api'

const FAQSection = () => {
  const { data, refetch } = useGetListQuestions()

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
