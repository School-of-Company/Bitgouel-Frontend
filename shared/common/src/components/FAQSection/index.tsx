'use client'

import { FAQAnswerItem, FAQItem } from '@bitgouel/common'
import * as S from './style'
import { FAQProps } from '@bitgouel/types'

const FAQSection = () => {
  const FAQItems: FAQProps[] = [
    {
      id: 0,
      question: '학원에서 자격증 과정을 운영할 수 있나요?1',
      answer:
        '1직업계고 중 소수의 학과가 운영되는 경우 수강인원 확보가 어려워 대학연계를 지원하지 못하였습니다. 참여 학생의 수강신청을 담보할 수 없는 상황에서 무리한 교육과정 개설은 신청 미달 시 지역대학에게 부담이 될 수 있기에 이러한 결정을 내렸습니다.',
    },
    {
      id: 1,
      question: '학원에서 자격증 과정을 운영할 수 있나요?2',
      answer:
        '2직업계고 중 소수의 학과가 운영되는 경우 수강인원 확보가 어려워 대학연계를 지원하지 못하였습니다. 참여 학생의 수강신청을 담보할 수 없는 상황에서 무리한 교육과정 개설은 신청 미달 시 지역대학에게 부담이 될 수 있기에 이러한 결정을 내렸습니다.',
    },
  ]

  return (
    <S.FAQSectionWrapper>
      <S.FAQSectionContainer>
        <S.TitleBox>
          <S.SemiTitle>FAQ</S.SemiTitle>
          <S.Title>자주 묻는 질문</S.Title>
        </S.TitleBox>
        <S.FAQList>
          {FAQItems.map((item) => (
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
