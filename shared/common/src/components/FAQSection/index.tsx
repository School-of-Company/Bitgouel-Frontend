'use client'

import { useGetListQuestions } from '@bitgouel/api'
import { FAQAnswerItem, FAQItem } from '@bitgouel/common'
import * as S from './style'
import { useEffect, useState } from 'react'

const FAQSection = () => {
  const { data, refetch } = useGetListQuestions()
  // FAQ 목록을 저장할 상태, 초기값은 빈 배열로 설정
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    if (data?.data) {
      if (data.data.faqs.length !== faqs.length) {
        refetch()
      } else {
        setFaqs(data.data.faqs)
      }
    }
  }, [data])

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
