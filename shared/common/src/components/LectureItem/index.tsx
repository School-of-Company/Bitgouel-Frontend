'use client'

import { LectureSemesterToKor } from '@bitgouel/common'
import { LectureItemProps } from '@bitgouel/types'
import dayjs from 'dayjs'
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
        <S.LectureInfoContainer>
          <S.LectureInfoItem>
            {LectureSemesterToKor[item.semester]}
          </S.LectureInfoItem>
          <S.LectureInfoItem>
            {item.division}
            <hr />
            {item.line}
            <hr />
            {item.department}
          </S.LectureInfoItem>
        </S.LectureInfoContainer>
        <S.MenuNum>
          <span>
            {item.headCount}/{item.maxRegisteredUser}명
          </span>
          <span>
            {dayjs(item.startDate).format('YYYY.MM.DD')} ~{' '}
            {dayjs(item.endDate).format('YYYY.MM.DD')}
          </span>
        </S.MenuNum>
      </S.SubMenuContainer>
    </S.LectureItemWrapper>
  )
}
export default LectureItem
