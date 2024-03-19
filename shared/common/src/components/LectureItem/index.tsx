'use client'

import { dateToDot, lectureTypeToKor } from '@bitgouel/common'
import { LectureItemProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import * as S from './style'

const LectureItem = ({ item }: LectureItemProps) => {
  const { push } = useRouter()

  return (
    <S.LectureItemWrapper onClick={() => push(`/main/lecture/${item.id}`)}>
      <S.SubTitle>
        <S.Professor>{item.lecturer}</S.Professor>
      </S.SubTitle>
      <S.Title>{item.name}</S.Title>
      <S.MainTextContainer>
        <S.MainText>
          {item.content.length > 230
            ? `${item.content.slice(0, 230)}...`
            : item.content}
        </S.MainText>
      </S.MainTextContainer>
      <S.SubMenuContainer>
        <S.From>{lectureTypeToKor[item.lectureType]}</S.From>
        <S.MenuNum>
          <span>
            {dateToDot(item.startDate)} ~ {dateToDot(item.endDate)}
          </span>
          <span>•</span>
          <span>
            {item.headCount}/{item.maxRegisteredUser}명
          </span>
        </S.MenuNum>
      </S.SubMenuContainer>
    </S.LectureItemWrapper>
  )
}
export default LectureItem
