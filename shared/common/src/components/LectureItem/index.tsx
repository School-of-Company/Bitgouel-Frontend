'use client'

import { LectureItemProps } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { lectureTypeToKor } from '../../constants'
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
            {`${item.startDate.slice(0, 4)}년 ${item.startDate.slice(
              5,
              7
            )}월 ${item.startDate.slice(8, 10)}일 ${item.startDate.slice(
              11,
              16
            )}`}{' '}
            ~{' '}
            {`${item.endDate.slice(0, 4)}년 ${item.endDate.slice(
              5,
              7
            )}월 ${item.endDate.slice(8, 10)}일 ${item.endDate.slice(11, 16)}`}
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
